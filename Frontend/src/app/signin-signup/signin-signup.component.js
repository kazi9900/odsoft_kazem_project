"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignInSignUpComponent = void 0;
var core_1 = require("@angular/core");
var signin_form_component_1 = require("./signin-form/signin-form.component");
var signup_form_component_1 = require("./signup-form/signup-form.component");
var SignInSignUpComponent = /** @class */ (function () {
    function SignInSignUpComponent() {
    }
    SignInSignUpComponent.prototype.resetSignInForm = function () {
        if (this.signInForm && this.signInForm.form) {
            this.signInForm.form.reset({ emitEvent: false });
            this.signInForm.isFormSubmitted = false;
        }
    };
    SignInSignUpComponent.prototype.resetSignUpForm = function () {
        if (this.signUpForm && this.signUpForm.form) {
            this.signUpForm.form.reset({ emitEvent: false });
            this.signUpForm.form.get('proficiencyLanguages').clear();
            this.signUpForm.form.get('projects').clear();
            this.signUpForm.isFormSubmitted = false;
        }
    };
    __decorate([
        (0, core_1.ViewChild)(signin_form_component_1.SignInFormComponent)
    ], SignInSignUpComponent.prototype, "signInForm");
    __decorate([
        (0, core_1.ViewChild)(signup_form_component_1.SignUpFormComponent)
    ], SignInSignUpComponent.prototype, "signUpForm");
    SignInSignUpComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-signin-signup',
            templateUrl: './signin-signup.component.html',
            styleUrls: ['./signin-signup.component.scss']
        })
    ], SignInSignUpComponent);
    return SignInSignUpComponent;
}());
exports.SignInSignUpComponent = SignInSignUpComponent;
