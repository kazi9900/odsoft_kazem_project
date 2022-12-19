import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { ContributeService } from '../../contribute/services/contribute.service';
import { BaseComponent } from '../../shared/baseComponent';
import { SignUpService } from './services/signup.service';
import { ILanguage } from './viewmodels/interfaces/language';
import { IProficiencyLanguage } from './viewmodels/interfaces/proficiencyLanguage';
import { IProject } from './viewmodels/interfaces/project';
import { IUserProject } from './viewmodels/interfaces/userProject';
import { UserRegisterViewModel } from './viewmodels/userRegistryViewModel';

@UntilDestroy()
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignUpFormComponent extends BaseComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public isFormSubmitted: boolean = false;

  private existsEmail$: Subscription;

  public formArrayProficiencyLanguagesControls(): FormGroup[] {
    return (this.form.get('proficiencyLanguages') as FormArray).controls as FormGroup[];
  }

  public formArrayProjectsControls(): FormGroup[] {
    return (this.form.get('projects') as FormArray).controls as FormGroup[];
  }

  constructor(public contributeService: ContributeService,
    public signUpService: SignUpService,
    private formBuilder: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private translateService: TranslateService) {
    super();
  }

  public ngOnInit(): void {
    this.incrementIsBusy();
    this.initializeForm();
    this.decrementIsBusy();
  }

  public ngOnDestroy(): void {
    this.spinner.hide();
  }

  public signUp(): void {
    this.isFormSubmitted = true;

    if (this.form.valid) {
      const userRegister = this.saveFormValues();
      this.incrementIsBusy();
      this.spinner.show();

      this.signUpService.registerUser(userRegister)
        .pipe(untilDestroyed(this))
        .subscribe((response) => {
          this.spinner.hide();
          if (response) {
            this.toastr.success(this.translateService.instant('SignInSignUpComponent.Message.AccountCreatedCheckEmail'));
            this.router.navigate(['/'], { replaceUrl: true })
              .then((navigationResult: boolean) => {
                if (navigationResult) {
                  this.router.navigate(['/signin-signup'], { replaceUrl: true });
                }
              });
          } else {
            this.toastr.warning(this.translateService.instant('Shared.Message.IncorrectData'));
          }
          this.spinner.hide();
          this.decrementIsBusy();
        },
          () => {
            this.spinner.hide();
            this.toastr.error(this.translateService.instant('SignInSignUpComponent.Message.ErrorRegisteringUser'));
            this.decrementIsBusy();
          });
    }
  }

  public addProficiencyLanguage(): void {
    const newFormGroup = this.formBuilder.group({
      id: [null, Validators.required],
      levelProficiency: [0, Validators.required]
    });

    (this.form.controls.proficiencyLanguages as FormArray).insert(0, newFormGroup);
    if ((this.form.controls.proficiencyLanguages as FormArray).length > 1) {
      this.form.get('proficiencyLanguages.1.id').disable();
    }

  }

  public removeProficiencyLanguage(index: number): void {
    (this.form.controls.proficiencyLanguages as FormArray).controls.splice(index, 1);
    (this.form.controls.proficiencyLanguages as FormArray).updateValueAndValidity();
    if ((this.form.controls.proficiencyLanguages as FormArray).length > 0) {
      this.form.get('proficiencyLanguages.0.id').enable();
    }
    this.contributeService.languagesList = this.contributeService.languagesList.slice();
  }

  public addProject(isNew: boolean): void {
    const newFormGroup =
      this.formBuilder.group({
        id: [{ value: null, disabled: isNew }, isNew ? [] : [Validators.required]],
        name: [{ value: '', disabled: !isNew }, isNew ? [Validators.required] : []],
        description: [{ value: '', disabled: !isNew }, isNew ? [Validators.required] : []],
        l1: [{ value: null, disabled: !isNew }, isNew ? [Validators.required] : []],
        l2: [{ value: null, disabled: !isNew }, isNew ? [Validators.required] : []],
        isNew: [isNew, []]
      });

    if (!isNew) {
      newFormGroup.get('id').valueChanges
        .pipe(untilDestroyed(this))
        .subscribe((value: number) => {
          const project = this.contributeService.projectsList.find(x => x.id === value);

          if (project) {
            newFormGroup.get('name').setValue(project.name, { emitEvent: false });
            newFormGroup.get('description').setValue(project.descr, { emitEvent: false });
            newFormGroup.get('l1').setValue(project.language1Id, { emitEvent: false });
            newFormGroup.get('l2').setValue(project.language2Id, { emitEvent: false });
          } else {
            newFormGroup.get('name').setValue('', { emitEvent: false });
            newFormGroup.get('description').setValue('', { emitEvent: false });
            newFormGroup.get('l1').setValue(null, { emitEvent: false });
            newFormGroup.get('l2').setValue(null, { emitEvent: false });
          }
        });
    }

    (this.form.controls.projects as FormArray).insert(0, newFormGroup);
    if ((this.form.controls.projects as FormArray).length > 1) {
      this.form.get('projects.1.id').disable();
    }

  }

  public removeProject(index: number): void {
    (this.form.controls.projects as FormArray).controls.splice(index, 1);
    (this.form.controls.projects as FormArray).updateValueAndValidity();
    if ((this.form.controls.projects as FormArray).length > 0) {
      this.form.get('projects.0.id').enable();
    }
    this.contributeService.projectsList = this.contributeService.projectsList.slice();
  }

  public filterLanguages([languages, index]: [ILanguage[], number]): ILanguage[] {
    if (!languages) {
      return [];
    }

    const languagesSelected = ((this.form.get('proficiencyLanguages') as FormArray).controls as FormGroup[]).map(x => x.get('id').value);
    languagesSelected.splice(index, 1);

    return languages.filter(x => !languagesSelected.includes(x.id));
  }

  public filterProjects([projects, index]: [IProject[], number]): IProject[] {
    if (!projects) {
      return [];
    }

    const projectsSelected = ((this.form.get('projects') as FormArray).controls as FormGroup[]).map(x => x.get('id').value);
    projectsSelected.splice(index, 1);

    return projects.filter(x => !projectsSelected.includes(x.id));
  }

  public removeLanguage([languagesList, languageId]: [ILanguage[], number | null]): ILanguage[] {
    if (languagesList) {
      return languagesList.filter(x => x.id !== languageId);
    }

    return [];
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      proficiencyLanguages: this.formBuilder.array([]),
      projects: this.formBuilder.array([]),
    });

    this.form.get('email').valueChanges
      .pipe(debounceTime(500), untilDestroyed(this))
      .subscribe((value) => {
        if (!this.form.get('email').hasError('required') && !this.form.get('email').hasError('email')) {
          if (this.existsEmail$) {
            this.existsEmail$.unsubscribe();
          }

          this.existsEmail$ = this.signUpService.emailExists(value)
            .pipe(debounceTime(500), untilDestroyed(this))
            .subscribe((response) => {
              if (response) {
                this.form.get('email').setErrors({ alredyExist: true }, { emitEvent: true });
              } else {
                this.form.get('email').setErrors(null, { emitEvent: true });
              }
            },
              () => {
              });
        }
      });
  }

  private saveFormValues(): UserRegisterViewModel {
    const userRegister = new UserRegisterViewModel();
    userRegister.name = this.form.controls.name.value;
    userRegister.email = this.form.controls.email.value;

    userRegister.proficiencyLanguages = (this.formArrayProficiencyLanguagesControls() as FormGroup[])
      .map(x => {
        return {
          userId: null,
          languageId: x.controls.id.value,
          levelProficiency: x.controls.levelProficiency.value
        } as IProficiencyLanguage;
      });

    userRegister.userProjects = (this.formArrayProjectsControls() as FormGroup[])
      .map(x => {
        return {
          userId: null,
          projectId: x.controls.id.value,
          isProjectOwner: x.controls.isNew.value,
          isAutorized: x.controls.isNew.value,
          project: {
            id: x.controls.id.value,
            name: x.controls.name.value,
            descr: x.controls.description.value,
            language1Id: x.controls.l1.value,
            language2Id: x.controls.l2.value,
          } as IProject
        } as IUserProject;
      });

    return userRegister;
  }

}
