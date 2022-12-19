import { Component, ViewChild } from '@angular/core';
import { FormArray } from '@angular/forms';

import { SignInFormComponent } from './signin-form/signin-form.component';
import { SignUpFormComponent } from './signup-form/signup-form.component';

@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.scss']
})
export class SignInSignUpComponent {
  @ViewChild(SignInFormComponent) signInForm: SignInFormComponent;
  @ViewChild(SignUpFormComponent) signUpForm: SignUpFormComponent;

  public resetSignInForm(): void {
    if (this.signInForm && this.signInForm.form) {
      this.signInForm.form.reset({ emitEvent: false });
      this.signInForm.isFormSubmitted = false;
    }
  }

  public resetSignUpForm(): void {
    if (this.signUpForm && this.signUpForm.form) {
      this.signUpForm.form.reset({ emitEvent: false });
      (this.signUpForm.form.get('proficiencyLanguages') as FormArray).clear();
      (this.signUpForm.form.get('projects') as FormArray).clear();
      this.signUpForm.isFormSubmitted = false;
    }
  }
}
