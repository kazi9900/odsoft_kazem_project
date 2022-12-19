import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { CredentialsService } from '../../core/services/credentials.service';
import { MaintenanceService } from '../../maintenance/services/maintenance.service';
import { IUser } from '../../maintenance/viewmodels/interfaces/user';
import { LanguageViewModel } from '../../maintenance/viewmodels/languageViewModel';
import { ProjectUserViewModel } from '../../maintenance/viewmodels/projectUserViewModel';
import { ProjectViewModel } from '../../maintenance/viewmodels/projectViewModel';
import { BaseComponent } from '../../shared/baseComponent';
import { ILanguage } from '../../signin-signup/signup-form/viewmodels/interfaces/language';
import { IProject } from '../../signin-signup/signup-form/viewmodels/interfaces/project';
import { ContributeService } from '../services/contribute.service';
import { UserProjectViewModel } from '../viewmodels/userProjectViewModel';

@UntilDestroy()
@Component({
  selector: 'app-contribute-projects',
  templateUrl: './contribute-projects.component.html',
  styleUrls: ['./contribute-projects.component.scss']
})
export class ContributeProjectsComponent extends BaseComponent implements OnInit, OnDestroy {
  public listUserProjects: UserProjectViewModel[] = [];

  public listLanguages: LanguageViewModel[] = [];
  public listUsers: IUser[] = [];

  public currentProject: ProjectViewModel = null;
  public currentUserProject: UserProjectViewModel = null;

  public modeAdd: boolean = false;

  public popupVisible: boolean = false;

  public form: FormGroup;
  public isFormSubmitted: boolean = false;

  public radioButtonItems: any[] = [
    {
      text: this.translateService.instant('Shared.Label.Autorized'),
      value: true
    },
    {
      text: this.translateService.instant('Shared.Label.NoAutorized'),
      value: false
    },
    {
      text: this.translateService.instant('Shared.Label.Pending'),
      value: null
    }
  ];

  public formArrayProjectUsersControls(): FormGroup[] {
    return (this.form.get('projectUsers') as FormArray).controls as FormGroup[];
  }

  constructor(public credencialsService: CredentialsService,
    public contributeService: ContributeService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private maintenanceService: MaintenanceService,
    private spinner: NgxSpinnerService,
    public translateService: TranslateService) {
    super();
  }

  public ngOnInit(): void {
    this.loadregistos();
  }

  public ngOnDestroy(): void {
    this.spinner.hide();
  }

  public countUsersInState([projectUsers, state]: [ProjectUserViewModel[], boolean]): number {
    if (!projectUsers) {
      return 0;
    }

    return projectUsers.filter(x => x.isAutorized === state).length;
  }

  public filterUsers([users, index]: [IUser[], number]): IUser[] {
    if (!users) {
      return [];
    }

    const usersSelected = ((this.form.get('projectUsers') as FormArray).controls as FormGroup[]).map(x => x.get('userId').value);
    usersSelected.splice(index, 1);

    return users.filter(x => !usersSelected.includes(x.id));
  }

  public removeLanguage([languagesList, languageId]: [ILanguage[], number | null]): ILanguage[] {
    if (languagesList) {
      return languagesList.filter(x => x.id !== languageId);
    }

    return [];
  }

  public onSelectItem(project: ProjectViewModel): void {
    if (project) {
      this.isFormSubmitted = false;
      this.currentProject = project;
      this.initializeForm();
      this.popupVisible = true;
    }
  }

  public onCancel(): void {
    this.popupVisible = false;
    this.form = null;
    this.currentProject = null;
    this.currentUserProject = null;
  }

  public onSave(): void {
    this.isFormSubmitted = true;

    if (this.form && this.form.valid) {

      if (this.currentProject) {
        const registo = new ProjectViewModel();
        registo.id = this.form.get('id').value;
        registo.name = this.form.get('name').value;
        registo.description = this.form.get('description').value;
        registo.language1Id = this.form.get('language1Id').value;
        registo.language2Id = this.form.get('language2Id').value;
        registo.active = this.form.get('active').value;
        registo.userCreationId = this.form.get('userCreationId').value;
        registo.dateCreation = this.form.get('dateCreation').value;
        registo.userChangeId = this.form.get('userChangeId').value;
        registo.dateChange = this.form.get('dateChange').value;

        registo.projectUsers = this.formArrayProjectUsersControls().map(x => {
          const projectUser = new ProjectUserViewModel();
          projectUser.userId = x.get('userId').value;
          projectUser.projectId = x.get('projectId').value;
          projectUser.isAutorized = x.get('isAutorized').value;
          projectUser.isprojectOwner = x.get('isprojectOwner').value;

          return projectUser;
        });

        if (this.currentProject && this.currentProject.id) { // UPDATE
          this.incrementIsBusy();
          this.maintenanceService.updateProject(registo)
            .pipe(untilDestroyed(this))
            .subscribe((response: ProjectViewModel) => {
              this.currentProject.copyFrom(response);
              this.popupVisible = false;
              this.form = null;
              this.currentProject = null;
              this.decrementIsBusy();
            }, () => {
              this.decrementIsBusy();
              this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorUpdatingProject'));
            });

        } else { // INSERT
          this.incrementIsBusy();
          this.maintenanceService.insertProject(registo)
            .pipe(untilDestroyed(this))
            .subscribe((response: ProjectViewModel) => {
              this.currentProject = new ProjectViewModel(response);
              const newRegisto = new UserProjectViewModel();
              newRegisto.isAutorized = true;
              newRegisto.isprojectOwner = true;
              newRegisto.projectId = this.currentProject.id;
              newRegisto.project = this.currentProject;
              this.listUserProjects.push(newRegisto);
              this.popupVisible = false;
              this.form = null;
              this.currentProject = null;
              this.currentUserProject = null;
              this.decrementIsBusy();
            }, () => {
              this.decrementIsBusy();
              this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorInsertingNewProject'));
            });
        }
      } else if (this.currentUserProject) {
        this.currentUserProject.projectId = this.form.get('id').value;
        this.contributeService.insertUserProject(this.currentUserProject)
          .pipe(untilDestroyed(this))
          .subscribe((response: UserProjectViewModel) => {
            const newRegisto = new UserProjectViewModel(response);
            this.listUserProjects.push(newRegisto);
            this.popupVisible = false;
            this.form = null;
            this.currentProject = null;
            this.currentUserProject = null;
            this.decrementIsBusy();
          }, () => {
            this.decrementIsBusy();
            this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorInsertingNewProject'));
          });
      }
    }
  }

  public createProject(): void {
    const newProject = new ProjectViewModel();

    const newProjectUser = new ProjectUserViewModel();
    newProjectUser.userId = this.credencialsService.getCredentials.id;
    newProjectUser.userName = this.credencialsService.getCredentials.email;
    newProjectUser.isAutorized = true;
    newProjectUser.isprojectOwner = true;

    newProject.projectUsers = [newProjectUser];
    newProject.active = true;

    this.onSelectItem(newProject);
  }

  public addProject(): void {
    const newUserProject = new UserProjectViewModel();
    newUserProject.isprojectOwner = false;
    newUserProject.userId = this.credencialsService.getCredentials.id;
    newUserProject.isAutorized = null;
    newUserProject.projectId = null;

    this.currentUserProject = newUserProject;

    this.form = this.formBuilder.group({
      id: [null, [Validators.required]],
      name: [{ value: null, disabled: true }],
      description: [{ value: null, disabled: true }],
      language1Id: [{ value: null, disabled: true }],
      language2Id: [{ value: null, disabled: true }],
    });

    this.form.get('id').valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value: number) => {
        const project = this.contributeService.projectsList ? this.contributeService.projectsList.find(x => x.id === value) : null;

        if (project) {
          this.form.get('name').setValue(project.name, { emitEvent: false });
          this.form.get('description').setValue(project.descr, { emitEvent: false });
          this.form.get('language1Id').setValue(project.language1Id, { emitEvent: false });
          this.form.get('language2Id').setValue(project.language2Id, { emitEvent: false });
        } else {
          this.form.get('name').setValue('', { emitEvent: false });
          this.form.get('description').setValue('', { emitEvent: false });
          this.form.get('language1Id').setValue(null, { emitEvent: false });
          this.form.get('language2Id').setValue(null, { emitEvent: false });
        }
      });

    this.isFormSubmitted = false;
    this.popupVisible = true;
  }

  public filterProjects(listProjects: IProject[]): IProject[] {
    if (!listProjects) {
      return [];
    }

    const currentUserProjects = this.listUserProjects.map(x => x.projectId);

    return listProjects.filter(x => !currentUserProjects.includes(x.id));
  }

  public loadregistos(): void {
    this.spinner.show();
    this.incrementIsBusy();
    this.contributeService
      .getUserProjects(this.credencialsService.getCredentials.id)
      .pipe(untilDestroyed(this))
      .subscribe((response: UserProjectViewModel[]) => {
        this.listUserProjects = response;
        this.spinner.hide();
        this.decrementIsBusy();

      }, () => {
        this.toastr.error(this.translateService.instant('Shared.Message.ErrorLoading'));
        this.spinner.hide();
        this.decrementIsBusy();
      });
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      id: [this.currentProject.id],
      name: [this.currentProject.name, [Validators.required]],
      description: [this.currentProject.description, [Validators.required]],
      language1Id: [this.currentProject.language1Id, [Validators.required]],
      language2Id: [this.currentProject.language2Id, [Validators.required]],
      active: [this.currentProject.active],
      userCreationId: [this.currentProject.userCreationId],
      dateCreation: [this.currentProject.dateCreation],
      userChangeId: [this.currentProject.userChangeId],
      dateChange: [this.currentProject.dateChange],
      projectUsers: this.formBuilder.array([]),
    });

    if (this.currentProject.projectUsers) {

      this.currentProject.projectUsers.forEach(u => {
        const formGroup = this.formBuilder.group({
          userId: [u.userId, [Validators.required]],
          userName: [u.userName],
          projectId: [u.projectId],
          isprojectOwner: [{ value: u.isprojectOwner, disabled: !this.currentProject.id }],
          isAutorized: [{ value: u.isAutorized, disabled: u.isprojectOwner }, []],
        });

        formGroup.get('isprojectOwner').valueChanges
          .pipe(untilDestroyed(this))
          .subscribe((value) => {
            if (value) {
              formGroup.get('isAutorized').setValue(true, { emitEvent: false });
              formGroup.get('isAutorized').disable({ emitEvent: false });

            } else {
              formGroup.get('isAutorized').enable({ emitEvent: false });
            }
          });

        (this.form.get('projectUsers') as FormArray).push(formGroup);
      });
    }
  }

}
