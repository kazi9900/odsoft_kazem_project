import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';
import { BaseComponent } from '../../shared/baseComponent';
import { MaintenanceService } from '../services/maintenance.service';
import { IUser } from '../viewmodels/interfaces/user';
import { LanguageViewModel } from '../viewmodels/languageViewModel';
import { ProjectUserViewModel } from '../viewmodels/projectUserViewModel';
import { ProjectViewModel } from '../viewmodels/projectViewModel';

@UntilDestroy()
@Component({
  selector: 'app-maintenance-projects',
  templateUrl: './maintenance-projects.component.html',
  styleUrls: ['./maintenance-projects.component.scss']
})
export class MaintenanceProjectsComponent extends BaseComponent implements OnInit, OnDestroy {
  public listProjects: ProjectViewModel[];

  public listLanguages: LanguageViewModel[] = [];
  public listUsers: IUser[] = [];

  public currentProject: ProjectViewModel = null;

  public popupVisible: boolean = false;

  public form: FormGroup;
  public isFormSubmitted: boolean = false;

  public formArrayProjectUsersControls(): FormGroup[] {
    return (this.form.get('projectUsers') as FormArray).controls as FormGroup[];
  }

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private maintenanceService: MaintenanceService,
    private spinner: NgxSpinnerService) {
    super();
  }

  public ngOnInit(): void {
    this.loadDados();
  }

  public ngOnDestroy(): void {
    this.spinner.hide();
  }

  public addProjectUser(): void {
    const newFormGroup = this.formBuilder.group({
      userId: [null, [Validators.required]],
      userName: [null],
      projectId: [null],
      isprojectOwner: [null],
      isAutorized: [true],
    });

    (this.form.controls.projectUsers as FormArray).insert(0, newFormGroup);
    if ((this.form.controls.projectUsers as FormArray).length > 1) {
      this.form.get('projectUsers.1.userId').disable();
    }
  }

  public removeProjectUser(index: number): void {
    (this.form.controls.projectUsers as FormArray).controls.splice(index, 1);
    (this.form.controls.projectUsers as FormArray).updateValueAndValidity();
    if ((this.form.controls.projectUsers as FormArray).length > 0) {
      this.form.get('projectUsers.0.userId').enable();
    }
    this.listUsers = this.listUsers.slice();
  }

  public onAddProject(): void {
    const newProject = new ProjectViewModel();
    this.onSelectItem(newProject);
  }

  public onSelectItem(project: ProjectViewModel): void {
    this.isFormSubmitted = false;
    this.currentProject = project;
    this.initializeForm();
    this.popupVisible = true;
  }

  public onCancel(): void {
    this.popupVisible = false;
    this.form = null;
    this.currentProject = null;
  }

  public onSave(): void {
    this.isFormSubmitted = true;

    if (this.form && this.form.valid) {
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
            this.toastr.error('Erro ao atualizar o projecto');
          });

      } else { // INSERT
        this.incrementIsBusy();
        this.maintenanceService.insertProject(registo)
          .pipe(untilDestroyed(this))
          .subscribe((response: ProjectViewModel) => {
            this.currentProject = new ProjectViewModel(response);
            this.listProjects.push(this.currentProject);
            this.popupVisible = false;
            this.form = null;
            this.currentProject = null;
            this.decrementIsBusy();
          }, () => {
            this.decrementIsBusy();
            this.toastr.error('Erro ao inserir novo projecto');
          });
      }
    }
  }

  public getLanguageName(id: number): string {
    const language = this.listLanguages.find(x => x.id === id);
    return language ? language.name : '';
  }

  public filterUsers([users, index]: [IUser[], number]): IUser[] {
    if (!users) {
      return [];
    }

    const usersSelected = ((this.form.get('projectUsers') as FormArray).controls as FormGroup[]).map(x => x.get('userId').value);
    usersSelected.splice(index, 1);

    return users.filter(x => !usersSelected.includes(x.id));
  }

  public removeLanguage([languagesList, languageId]: [LanguageViewModel[], number | null]): LanguageViewModel[] {
    if (languagesList) {
      return languagesList.filter(x => x.id !== languageId);
    }

    return [];
  }

  private loadDados(): void {
    this.spinner.show();
    this.incrementIsBusy();
    forkJoin([
      this.maintenanceService.getLanguages(),
      this.maintenanceService.getUsersLight()
    ])
      .pipe(untilDestroyed(this))
      .subscribe(([languages, users]: [LanguageViewModel[], IUser[]]) => {
        this.listLanguages = languages;
        this.listUsers = users;
        this.loadRegistos();
        this.decrementIsBusy();
        this.spinner.hide();
      }, () => {
        this.decrementIsBusy();
        this.spinner.hide();
        this.toastr.error('Erro ao carregar dados');
      });
  }

  private loadRegistos(): void {
    this.incrementIsBusy();
    this.maintenanceService.getProjects()
      .pipe(untilDestroyed(this))
      .subscribe((response: ProjectViewModel[]) => {
        this.listProjects = response;
        this.decrementIsBusy();
      }, () => {
        this.decrementIsBusy();
        this.toastr.error('Erro ao carregar registos');
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
      projectUsers: this.formBuilder.array(
        this.currentProject.projectUsers.map(u => this.formBuilder.group({
          userId: [u.userId, [Validators.required]],
          userName: [u.userName],
          projectId: [u.projectId],
          isprojectOwner: [u.isprojectOwner],
          isAutorized: [u.isAutorized],
        }))),
    });
  }
}
