import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { AuthenticationService } from '../../core/services/authentication.service';
import { DataService } from '../../core/services/data.service';
import { ICredentials } from '../../core/viewmodels/interfaces/credentials';
import { SignUpService } from '../signup-form/services/signup.service';
import { ResetPasswordViewModel } from '../signup-form/viewmodels/passwordResetViewModel';
import { UserLoginViewModel } from './viewmodels/userLoginViewModel';

@UntilDestroy()
@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SignInFormComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public isFormSubmitted: boolean = false;
  public isBusy: boolean = false;

  public popupVisible: boolean = false;
  public formResetPassword: FormGroup;
  public isFormResetPasswordSubmitted: boolean = false;
  private resetPassword: ResetPasswordViewModel;

  private existsEmail$: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private signUpService: SignUpService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private translateService: TranslateService) { }

  public ngOnInit(): void {
    this.isBusy = true;
    this.initializeForm();
    this.isBusy = false;
  }

  public ngOnDestroy(): void {
    this.spinner.hide();
  }

  public signIn(): void {
    this.isFormSubmitted = true;

    if (this.form.valid) {
      const userLogin = this.saveFormValues();
      this.spinner.show();
      this.authenticationService.login(userLogin)
        .pipe(untilDestroyed(this))
        .subscribe((response: ICredentials) => {
          this.spinner.hide();
          if (response) {
            this.toastr.success(this.translateService.instant('SignInSignUpComponent.Message.LoginSuccessfull'));
            this.router.navigate(['/'], { replaceUrl: true });
          } else {
            this.toastr.warning(this.translateService.instant('Shared.Message.IncorrectData'));
          }
        },
          () => {
            this.spinner.hide();
            this.toastr.error(this.translateService.instant('SignInSignUpComponent.Message.ErrorLoginUser'));
          });
    }
  }

  public onOpenFormResetPassword(): void {
    this.formResetPassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      code: [{ value: '', disabled: true }, [Validators.required]],
      newPassword: [{ value: '', disabled: true }, [Validators.required, Validators.minLength(8)]],
    });

    this.resetPassword = new ResetPasswordViewModel();
    this.popupVisible = true;
  }

  public onCancel(): void {
    this.popupVisible = false;
    this.formResetPassword = null;
    this.resetPassword = null;
  }

  public onSendEmailCodeResetPassword(): void {
    this.isFormResetPasswordSubmitted = true;
    if (this.formResetPassword && this.formResetPassword.get('email').valid) {

      this.resetPassword.email = this.formResetPassword.get('email').value;
      this.isBusy = true;
      this.signUpService.sendCodeResetPassword(this.resetPassword)
        .pipe(untilDestroyed(this))
        .subscribe((response: boolean) => {
          if (response) {
            this.isFormResetPasswordSubmitted = false;
            this.formResetPassword.get('email').disable();
            this.formResetPassword.get('code').enable();
          } else {
            this.formResetPassword.get('email').setErrors({ noExist: true }, { emitEvent: false });
          }
          this.isBusy = false;
        },
          () => {
            this.isBusy = false;
            this.toastr.error('ERROR');
          });
    }
  }

  public onCheckCodeResetPassword(): void {
    this.isFormResetPasswordSubmitted = true;

    if (this.formResetPassword && this.formResetPassword.get('code').valid) {

      this.resetPassword.code = this.formResetPassword.get('code').value;
      this.isBusy = true;
      this.signUpService.checkCodeResetPassword(this.resetPassword)
        .pipe(untilDestroyed(this))
        .subscribe((response: boolean) => {
          if (response) {
            this.isFormResetPasswordSubmitted = false;
            this.formResetPassword.get('code').disable();
            this.formResetPassword.get('newPassword').enable();
          } else {
            this.formResetPassword.get('code').setErrors({ notValid: true }, { emitEvent: false });
          }
          this.isBusy = false;
        },
          () => {
            this.isBusy = false;
            this.toastr.error('ERROR');
          });
    }
  }

  public onResetPassword(): void {
    this.isFormResetPasswordSubmitted = true;

    if (this.formResetPassword && this.formResetPassword.get('newPassword').valid) {

      this.resetPassword.newPassword = this.formResetPassword.get('newPassword').value;
      this.isBusy = true;
      this.signUpService.resetPassword(this.resetPassword)
        .pipe(untilDestroyed(this))
        .subscribe((response: boolean) => {
          if (response) {
            this.popupVisible = false;
            this.toastr.success(this.translateService.instant('ProfileComponent.Message.PasswordSuccessfullyChanged'));
            this.formResetPassword = null;
            this.resetPassword = null;
          } else {
            this.formResetPassword.get('newPassword').setErrors({ invalid: true });
          }
          this.isBusy = false;
        },
          () => {
            this.isBusy = false;
            this.toastr.error('ERROR');
          });
    }
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
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
                this.form.get('email').setErrors(null, { emitEvent: true });
              } else {
                this.form.get('email').setErrors({ noExist: true }, { emitEvent: true });
              }
            },
              () => {
              });
        }
      });
  }

  private saveFormValues(): UserLoginViewModel {
    const userLogin = new UserLoginViewModel();
    userLogin.email = this.form.controls.email.value;
    userLogin.password = this.form.controls.password.value;

    return userLogin;
  }

}
