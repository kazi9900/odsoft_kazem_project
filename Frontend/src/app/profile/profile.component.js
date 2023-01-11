"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProfileComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var until_destroy_1 = require("@ngneat/until-destroy");
var baseComponent_1 = require("../shared/baseComponent");
var userViewModel_1 = require("../signin-signup/signin-form/viewmodels/userViewModel");
var ProfileComponent = /** @class */ (function (_super) {
    __extends(ProfileComponent, _super);
    function ProfileComponent(contributeService, credentialsService, formBuilder, signUpService, toastr, translateService) {
        var _this = _super.call(this) || this;
        _this.contributeService = contributeService;
        _this.credentialsService = credentialsService;
        _this.formBuilder = formBuilder;
        _this.signUpService = signUpService;
        _this.toastr = toastr;
        _this.translateService = translateService;
        _this.isFormSubmitted = false;
        _this.popupVisible = false;
        return _this;
    }
    ProfileComponent.prototype.formArrayProficiencyLanguagesControls = function () {
        return this.form.get('proficiencyLanguages').controls;
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    ProfileComponent.prototype.addProficiencyLanguage = function () {
        var newFormGroup = this.formBuilder.group({
            userId: [this.credentialsService.getCredentials.id],
            languageId: [null, forms_1.Validators.required],
            levelProficiency: [0, forms_1.Validators.required],
            isNew: true
        });
        this.form.controls.proficiencyLanguages.insert(0, newFormGroup);
        if (this.form.controls.proficiencyLanguages.length > 1) {
            this.form.get('proficiencyLanguages.1.languageId').disable();
        }
    };
    ProfileComponent.prototype.removeProficiencyLanguage = function (index) {
        var _this = this;
        if (this.formArrayProficiencyLanguagesControls()[index].get('isNew').value) {
            this.form.controls.proficiencyLanguages.controls.splice(index, 1);
            this.form.controls.proficiencyLanguages.updateValueAndValidity();
            if (this.form.controls.proficiencyLanguages.length > 0 && this.form.get('proficiencyLanguages.0.isNew').value) {
                this.form.get('proficiencyLanguages.0.languageId').enable();
            }
            this.contributeService.languagesList = this.contributeService.languagesList.slice();
        }
        else {
            var userId = this.formArrayProficiencyLanguagesControls()[index].get('userId').value;
            var languageId = this.formArrayProficiencyLanguagesControls()[index].get('languageId').value;
            this.signUpService.existsSomeSentenceUserIdAndLanguageId(userId, languageId)
                .pipe((0, until_destroy_1.untilDestroyed)(this))
                .subscribe(function (response) {
                if (!response) {
                    _this.form.controls.proficiencyLanguages.controls.splice(index, 1);
                    _this.form.controls.proficiencyLanguages.updateValueAndValidity();
                    if (_this.form.controls.proficiencyLanguages.length > 0 && _this.form.get('proficiencyLanguages.0.isNew').value) {
                        _this.form.get('proficiencyLanguages.0.languageId').enable();
                    }
                    _this.contributeService.languagesList = _this.contributeService.languagesList.slice();
                }
                else {
                    _this.toastr.warning(_this.translateService.instant('ProfileComponent.Message.NotPossibleRemoveLanguageProficiency'));
                }
            });
        }
    };
    ProfileComponent.prototype.filterLanguages = function (_a) {
        var languages = _a[0], index = _a[1];
        if (!languages) {
            return [];
        }
        var languagesSelected = this.form.get('proficiencyLanguages').controls.map(function (x) { return x.get('languageId').value; });
        languagesSelected.splice(index, 1);
        return languages.filter(function (x) { return !languagesSelected.includes(x.id); });
    };
    ProfileComponent.prototype.openFormChangePassword = function () {
        this.formChangePassword = this.formBuilder.group({
            oldPassword: [null, [forms_1.Validators.required]],
            newPassword: [null, [forms_1.Validators.required]],
            newPasswordAgain: [null, [forms_1.Validators.required]]
        }, { validator: this.samePassword });
        this.popupVisible = true;
    };
    ProfileComponent.prototype.onCancel = function () {
        this.popupVisible = false;
        this.formChangePassword = null;
    };
    ProfileComponent.prototype.onSave = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.formChangePassword && this.formChangePassword.valid) {
            var changePassword = {
                email: this.credentialsService.getCredentials.email,
                oldPassword: this.formChangePassword.get('oldPassword').value,
                newPassword: this.formChangePassword.get('newPassword').value
            };
            this.incrementIsBusy();
            this.signUpService.changePassword(changePassword)
                .pipe((0, until_destroy_1.untilDestroyed)(this))
                .subscribe(function (response) {
                if (response) {
                    _this.popupVisible = false;
                    _this.formChangePassword = null;
                    _this.toastr.success(_this.translateService.instant('ProfileComponent.Message.PasswordSuccessfullyChanged'));
                }
                else {
                    _this.toastr.warning(_this.translateService.instant('ProfileComponent.Message.InvalidPassword'));
                }
                _this.decrementIsBusy();
            }, function () {
                _this.decrementIsBusy();
                _this.toastr.error(_this.translateService.instant('ProfileComponent.Message.ErrorChangingPassword'));
            });
        }
    };
    ProfileComponent.prototype.onSaveChangesProfile = function () {
        var _this = this;
        if (this.form && this.form.valid) {
            var user = this.saveFormValues();
            this.incrementIsBusy();
            this.signUpService.updateProfile(user)
                .pipe((0, until_destroy_1.untilDestroyed)(this))
                .subscribe(function (userResponse) {
                _this.decrementIsBusy();
                _this.credentialsService.currentUser.copyFrom(userResponse);
                _this.initializeForm();
                _this.toastr.success(_this.translateService.instant('ProfileComponent.Message.ProfileUpdatedSuccessfully'));
            }, function () {
                _this.decrementIsBusy();
                _this.toastr.error(_this.translateService.instant('ProfileComponent.Message.ErrorUpdatingProfile'));
            });
        }
    };
    ProfileComponent.prototype.initializeForm = function () {
        var _this = this;
        var currentUser = this.credentialsService.currentUser;
        this.form = this.formBuilder.group({
            name: [currentUser.name, [forms_1.Validators.required]],
            email: [{ value: currentUser.email, disabled: true }],
            proficiencyLanguages: this.formBuilder
                .array((currentUser.proficiencyLanguages || [])
                .map(function (x) { return _this.formBuilder.group({
                userId: [x.userId, [forms_1.Validators.required]],
                languageId: [{ value: x.languageId, disabled: true }],
                levelProficiency: [x.levelProficiency, forms_1.Validators.required],
                isNew: false
            }); }))
        });
    };
    ProfileComponent.prototype.samePassword = function (control) {
        if (!control.get('newPassword').hasError('required') && !control.get('newPasswordAgain').hasError('required')) {
            if (control.get('newPassword').value !== control.get('newPasswordAgain').value) {
                return { isNotEqual: true };
            }
        }
        return null;
    };
    ProfileComponent.prototype.saveFormValues = function () {
        var userProfile = new userViewModel_1.UserViewModel();
        userProfile.id = this.credentialsService.getCredentials.id;
        userProfile.name = this.form.controls.name.value;
        userProfile.email = this.form.controls.email.value;
        userProfile.proficiencyLanguages = this.formArrayProficiencyLanguagesControls()
            .map(function (x) {
            return {
                userId: x.controls.userId.value,
                languageId: x.controls.languageId.value,
                levelProficiency: x.controls.levelProficiency.value
            };
        });
        return userProfile;
    };
    ProfileComponent = __decorate([
        (0, until_destroy_1.UntilDestroy)(),
        (0, core_1.Component)({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.scss']
        })
    ], ProfileComponent);
    return ProfileComponent;
}(baseComponent_1.BaseComponent));
exports.ProfileComponent = ProfileComponent;
