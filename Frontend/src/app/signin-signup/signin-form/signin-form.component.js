"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignInFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var until_destroy_1 = require("@ngneat/until-destroy");
var operators_1 = require("rxjs/operators");
var passwordResetViewModel_1 = require("../signup-form/viewmodels/passwordResetViewModel");
var userLoginViewModel_1 = require("./viewmodels/userLoginViewModel");
var SignInFormComponent = /** @class */ (function () {
    function SignInFormComponent(authenticationService, dataService, formBuilder, router, signUpService, spinner, toastr, translateService) {
        this.authenticationService = authenticationService;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.signUpService = signUpService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.translateService = translateService;
        this.isFormSubmitted = false;
        this.isBusy = false;
        this.popupVisible = false;
        this.isFormResetPasswordSubmitted = false;
    }
    SignInFormComponent.prototype.ngOnInit = function () {
        this.isBusy = true;
        this.initializeForm();
        this.isBusy = false;
    };
    SignInFormComponent.prototype.ngOnDestroy = function () {
        this.spinner.hide();
    };
    SignInFormComponent.prototype.signIn = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.form.valid) {
            var userLogin = this.saveFormValues();
            this.spinner.show();
            this.authenticationService.login(userLogin)
                .pipe((0, until_destroy_1.untilDestroyed)(this))
                .subscribe(function (response) {
                _this.spinner.hide();
                if (response) {
                    _this.toastr.success(_this.translateService.instant('SignInSignUpComponent.Message.LoginSuccessfull'));
                    _this.router.navigate(['/'], { replaceUrl: true });
                }
                else {
                    _this.toastr.warning(_this.translateService.instant('Shared.Message.IncorrectData'));
                }
            }, function () {
                _this.spinner.hide();
                _this.toastr.error(_this.translateService.instant('SignInSignUpComponent.Message.ErrorLoginUser'));
            });
        }
    };
    SignInFormComponent.prototype.onOpenFormResetPassword = function () {
        this.formResetPassword = this.formBuilder.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            code: [{ value: '', disabled: true }, [forms_1.Validators.required]],
            newPassword: [{ value: '', disabled: true }, [forms_1.Validators.required, forms_1.Validators.minLength(8)]]
        });
        this.resetPassword = new passwordResetViewModel_1.ResetPasswordViewModel();
        this.popupVisible = true;
    };
    SignInFormComponent.prototype.onCancel = function () {
        this.popupVisible = false;
        this.formResetPassword = null;
        this.resetPassword = null;
    };
    SignInFormComponent.prototype.onSendEmailCodeResetPassword = function () {
        var _this = this;
        this.isFormResetPasswordSubmitted = true;
        if (this.formResetPassword && this.formResetPassword.get('email').valid) {
            this.resetPassword.email = this.formResetPassword.get('email').value;
            this.isBusy = true;
            this.signUpService.sendCodeResetPassword(this.resetPassword)
                .pipe((0, until_destroy_1.untilDestroyed)(this))
                .subscribe(function (response) {
                if (response) {
                    _this.isFormResetPasswordSubmitted = false;
                    _this.formResetPassword.get('email').disable();
                    _this.formResetPassword.get('code').enable();
                }
                else {
                    _this.formResetPassword.get('email').setErrors({ noExist: true }, { emitEvent: false });
                }
                _this.isBusy = false;
            }, function () {
                _this.isBusy = false;
                _this.toastr.error('ERROR');
            });
        }
    };
    SignInFormComponent.prototype.onCheckCodeResetPassword = function () {
        var _this = this;
        this.isFormResetPasswordSubmitted = true;
        if (this.formResetPassword && this.formResetPassword.get('code').valid) {
            this.resetPassword.code = this.formResetPassword.get('code').value;
            this.isBusy = true;
            this.signUpService.checkCodeResetPassword(this.resetPassword)
                .pipe((0, until_destroy_1.untilDestroyed)(this))
                .subscribe(function (response) {
                if (response) {
                    _this.isFormResetPasswordSubmitted = false;
                    _this.formResetPassword.get('code').disable();
                    _this.formResetPassword.get('newPassword').enable();
                }
                else {
                    _this.formResetPassword.get('code').setErrors({ notValid: true }, { emitEvent: false });
                }
                _this.isBusy = false;
            }, function () {
                _this.isBusy = false;
                _this.toastr.error('ERROR');
            });
        }
    };
    SignInFormComponent.prototype.onResetPassword = function () {
        var _this = this;
        this.isFormResetPasswordSubmitted = true;
        if (this.formResetPassword && this.formResetPassword.get('newPassword').valid) {
            this.resetPassword.newPassword = this.formResetPassword.get('newPassword').value;
            this.isBusy = true;
            this.signUpService.resetPassword(this.resetPassword)
                .pipe((0, until_destroy_1.untilDestroyed)(this))
                .subscribe(function (response) {
                if (response) {
                    _this.popupVisible = false;
                    _this.toastr.success(_this.translateService.instant('ProfileComponent.Message.PasswordSuccessfullyChanged'));
                    _this.formResetPassword = null;
                    _this.resetPassword = null;
                }
                else {
                    _this.formResetPassword.get('newPassword').setErrors({ invalid: true });
                }
                _this.isBusy = false;
            }, function () {
                _this.isBusy = false;
                _this.toastr.error('ERROR');
            });
        }
    };
    SignInFormComponent.prototype.initializeForm = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            email: [null, [forms_1.Validators.required, forms_1.Validators.email]],
            password: [null, [forms_1.Validators.required]]
        });
        this.form.get('email').valueChanges
            .pipe((0, operators_1.debounceTime)(500), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (value) {
            if (!_this.form.get('email').hasError('required') && !_this.form.get('email').hasError('email')) {
                if (_this.existsEmail$) {
                    _this.existsEmail$.unsubscribe();
                }
                _this.existsEmail$ = _this.signUpService.emailExists(value)
                    .pipe((0, operators_1.debounceTime)(500), (0, until_destroy_1.untilDestroyed)(_this))
                    .subscribe(function (response) {
                    if (response) {
                        _this.form.get('email').setErrors(null, { emitEvent: true });
                    }
                    else {
                        _this.form.get('email').setErrors({ noExist: true }, { emitEvent: true });
                    }
                }, function () {
                });
            }
        });
    };
    SignInFormComponent.prototype.saveFormValues = function () {
        var userLogin = new userLoginViewModel_1.UserLoginViewModel();
        userLogin.email = this.form.controls.email.value;
        userLogin.password = this.form.controls.password.value;
        return userLogin;
    };
    SignInFormComponent = __decorate([
        (0, until_destroy_1.UntilDestroy)(),
        (0, core_1.Component)({
            selector: 'app-signin-form',
            templateUrl: './signin-form.component.html',
            styleUrls: ['./signin-form.component.scss']
        })
    ], SignInFormComponent);
    return SignInFormComponent;
}());
exports.SignInFormComponent = SignInFormComponent;
