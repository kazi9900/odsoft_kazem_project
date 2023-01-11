import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ContributeService } from '../contribute/services/contribute.service';
import { CredentialsService } from '../core/services/credentials.service';
import { BaseComponent } from '../shared/baseComponent';
import { UserViewModel } from '../signin-signup/signin-form/viewmodels/userViewModel';
import { SignUpService } from '../signin-signup/signup-form/services/signup.service';
import { ILanguage } from '../signin-signup/signup-form/viewmodels/interfaces/language';
import { IProficiencyLanguage } from '../signin-signup/signup-form/viewmodels/interfaces/proficiencyLanguage';
import { IChangePassword } from './viewmodels/changePassword';

@UntilDestroy()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends BaseComponent implements OnInit {
  public form: FormGroup;
  public formChangePassword: FormGroup;
  public isFormSubmitted: boolean = false;

  public popupVisible: boolean = false;

  public formArrayProficiencyLanguagesControls(): FormGroup[] {
    return (this.form.get('proficiencyLanguages') as FormArray).controls as FormGroup[];
  }

  constructor(
    public contributeService: ContributeService,
    private credentialsService: CredentialsService,
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    private toastr: ToastrService,
    private translateService: TranslateService) {
    super();
  }

  public ngOnInit(): void {
    this.initializeForm();
  }

  public addProficiencyLanguage(): void {
    const newFormGroup = this.formBuilder.group({
      userId: [this.credentialsService.getCredentials.id],
      languageId: [null, Validators.required],
      levelProficiency: [0, Validators.required],
      isNew: true
    });

    (this.form.controls.proficiencyLanguages as FormArray).insert(0, newFormGroup);
    if ((this.form.controls.proficiencyLanguages as FormArray).length > 1) {
      this.form.get('proficiencyLanguages.1.languageId').disable();
    }
  }

  public removeProficiencyLanguage(index: number): void {

    if (this.formArrayProficiencyLanguagesControls()[index].get('isNew').value) {
      (this.form.controls.proficiencyLanguages as FormArray).controls.splice(index, 1);
      (this.form.controls.proficiencyLanguages as FormArray).updateValueAndValidity();
      if ((this.form.controls.proficiencyLanguages as FormArray).length > 0 && this.form.get('proficiencyLanguages.0.isNew').value) {
        this.form.get('proficiencyLanguages.0.languageId').enable();
      }
      this.contributeService.languagesList = this.contributeService.languagesList.slice();

    } else {
      const userId = this.formArrayProficiencyLanguagesControls()[index].get('userId').value;
      const languageId = this.formArrayProficiencyLanguagesControls()[index].get('languageId').value;

      this.signUpService.existsSomeSentenceUserIdAndLanguageId(userId, languageId)
        .pipe(untilDestroyed(this))
        .subscribe((response: boolean) => {
          if (!response) {
            (this.form.controls.proficiencyLanguages as FormArray).controls.splice(index, 1);
            (this.form.controls.proficiencyLanguages as FormArray).updateValueAndValidity();
            if ((this.form.controls.proficiencyLanguages as FormArray).length > 0 && this.form.get('proficiencyLanguages.0.isNew').value) {
              this.form.get('proficiencyLanguages.0.languageId').enable();
            }
            this.contributeService.languagesList = this.contributeService.languagesList.slice();

          } else {
            this.toastr.warning(this.translateService.instant('ProfileComponent.Message.NotPossibleRemoveLanguageProficiency'));
          }
        });
    }
  }

  public filterLanguages([languages, index]: [ILanguage[], number]): ILanguage[] {
    if (!languages) {
      return [];
    }

    const languagesSelected =
      ((this.form.get('proficiencyLanguages') as FormArray).controls as FormGroup[]).map(x => x.get('languageId').value);
    languagesSelected.splice(index, 1);

    return languages.filter(x => !languagesSelected.includes(x.id));
  }

  public openFormChangePassword(): void {
    this.formChangePassword = this.formBuilder.group({
      oldPassword: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
      newPasswordAgain: [null, [Validators.required]],
    }, { validator: this.samePassword });

    this.popupVisible = true;
  }

  public onCancel(): void {
    this.popupVisible = false;
    this.formChangePassword = null;
  }

  public onSave(): void {
    this.isFormSubmitted = true;
    if (this.formChangePassword && this.formChangePassword.valid) {
      const changePassword = {
        email: this.credentialsService.getCredentials.email,
        oldPassword: this.formChangePassword.get('oldPassword').value,
        newPassword: this.formChangePassword.get('newPassword').value
      } as IChangePassword;

      this.incrementIsBusy();
      this.signUpService.changePassword(changePassword)
        .pipe(untilDestroyed(this))
        .subscribe((response) => {
          if (response) {
            this.popupVisible = false;
            this.formChangePassword = null;
            this.toastr.success(this.translateService.instant('ProfileComponent.Message.PasswordSuccessfullyChanged'));

          } else {
            this.toastr.warning(this.translateService.instant('ProfileComponent.Message.InvalidPassword'));
          }
          this.decrementIsBusy();
        }, () => {
          this.decrementIsBusy();
          this.toastr.error(this.translateService.instant('ProfileComponent.Message.ErrorChangingPassword'));
        });
    }
  }

  public onSaveChangesProfile(): void {
    if (this.form && this.form.valid) {
      const user = this.saveFormValues();

      this.incrementIsBusy();
      this.signUpService.updateProfile(user)
        .pipe(untilDestroyed(this))
        .subscribe((userResponse: UserViewModel) => {
          this.decrementIsBusy();
          this.credentialsService.currentUser.copyFrom(userResponse);
          this.initializeForm();
          this.toastr.success(this.translateService.instant('ProfileComponent.Message.ProfileUpdatedSuccessfully'));

        }, () => {
          this.decrementIsBusy();
          this.toastr.error(this.translateService.instant('ProfileComponent.Message.ErrorUpdatingProfile'));
        });


    }
  }

  private initializeForm(): void {
    const currentUser = this.credentialsService.currentUser;

    this.form = this.formBuilder.group({
      name: [currentUser.name, [Validators.required]],
      email: [{ value: currentUser.email, disabled: true }],
      proficiencyLanguages: this.formBuilder
        .array((currentUser.proficiencyLanguages || [])
          .map(x => this.formBuilder.group({
            userId: [x.userId, [Validators.required]],
            languageId: [{ value: x.languageId, disabled: true }],
            levelProficiency: [x.levelProficiency, Validators.required],
            isNew: false
          }))
        )
    });
  }

  private samePassword(control: AbstractControl): { [key: string]: boolean } | null {

    if (!control.get('newPassword').hasError('required') && !control.get('newPasswordAgain').hasError('required')) {
      if (control.get('newPassword').value !== control.get('newPasswordAgain').value) {
        return { isNotEqual: true };
      }
    }

    return null;
  }

  private saveFormValues(): UserViewModel {
    const userProfile = new UserViewModel();
    userProfile.id = this.credentialsService.getCredentials.id;
    userProfile.name = this.form.controls.name.value;
    userProfile.email = this.form.controls.email.value;

    userProfile.proficiencyLanguages = (this.formArrayProficiencyLanguagesControls() as FormGroup[])
      .map(x => {
        return {
          userId: x.controls.userId.value,
          languageId: x.controls.languageId.value,
          levelProficiency: x.controls.levelProficiency.value
        } as IProficiencyLanguage;
      });

    return userProfile;
  }

}
