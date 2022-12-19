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
exports.SignUpFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var until_destroy_1 = require("@ngneat/until-destroy");
var operators_1 = require("rxjs/operators");
var baseComponent_1 = require("../../shared/baseComponent");
var userRegistryViewModel_1 = require("./viewmodels/userRegistryViewModel");
var SignUpFormComponent = /** @class */ (function (_super) {
    __extends(SignUpFormComponent, _super);
    function SignUpFormComponent(contributeService, signUpService, formBuilder, router, spinner, toastr, translateService) {
        var _this = _super.call(this) || this;
        _this.contributeService = contributeService;
        _this.signUpService = signUpService;
        _this.formBuilder = formBuilder;
        _this.router = router;
        _this.spinner = spinner;
        _this.toastr = toastr;
        _this.translateService = translateService;
        _this.isFormSubmitted = false;
        return _this;
    }
    SignUpFormComponent.prototype.formArrayProficiencyLanguagesControls = function () {
        return this.form.get('proficiencyLanguages').controls;
    };
    SignUpFormComponent.prototype.formArrayProjectsControls = function () {
        return this.form.get('projects').controls;
    };
    SignUpFormComponent.prototype.ngOnInit = function () {
        this.incrementIsBusy();
        this.initializeForm();
        this.decrementIsBusy();
    };
    SignUpFormComponent.prototype.ngOnDestroy = function () {
        this.spinner.hide();
    };
    SignUpFormComponent.prototype.signUp = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.form.valid) {
            var userRegister = this.saveFormValues();
            this.incrementIsBusy();
            this.spinner.show();
            this.signUpService.registerUser(userRegister)
                .pipe((0, until_destroy_1.untilDestroyed)(this))
                .subscribe(function (response) {
                _this.spinner.hide();
                if (response) {
                    _this.toastr.success(_this.translateService.instant('SignInSignUpComponent.Message.AccountCreatedCheckEmail'));
                    _this.router.navigate(['/'], { replaceUrl: true })
                        .then(function (navigationResult) {
                        if (navigationResult) {
                            _this.router.navigate(['/signin-signup'], { replaceUrl: true });
                        }
                    });
                }
                else {
                    _this.toastr.warning(_this.translateService.instant('Shared.Message.IncorrectData'));
                }
                _this.spinner.hide();
                _this.decrementIsBusy();
            }, function () {
                _this.spinner.hide();
                _this.toastr.error(_this.translateService.instant('SignInSignUpComponent.Message.ErrorRegisteringUser'));
                _this.decrementIsBusy();
            });
        }
    };
    SignUpFormComponent.prototype.addProficiencyLanguage = function () {
        var newFormGroup = this.formBuilder.group({
            id: [null, forms_1.Validators.required],
            levelProficiency: [0, forms_1.Validators.required]
        });
        this.form.controls.proficiencyLanguages.insert(0, newFormGroup);
        if (this.form.controls.proficiencyLanguages.length > 1) {
            this.form.get('proficiencyLanguages.1.id').disable();
        }
    };
    SignUpFormComponent.prototype.removeProficiencyLanguage = function (index) {
        this.form.controls.proficiencyLanguages.controls.splice(index, 1);
        this.form.controls.proficiencyLanguages.updateValueAndValidity();
        if (this.form.controls.proficiencyLanguages.length > 0) {
            this.form.get('proficiencyLanguages.0.id').enable();
        }
        this.contributeService.languagesList = this.contributeService.languagesList.slice();
    };
    SignUpFormComponent.prototype.addProject = function (isNew) {
        var _this = this;
        var newFormGroup = this.formBuilder.group({
            id: [{ value: null, disabled: isNew }, isNew ? [] : [forms_1.Validators.required]],
            name: [{ value: '', disabled: !isNew }, isNew ? [forms_1.Validators.required] : []],
            description: [{ value: '', disabled: !isNew }, isNew ? [forms_1.Validators.required] : []],
            l1: [{ value: null, disabled: !isNew }, isNew ? [forms_1.Validators.required] : []],
            l2: [{ value: null, disabled: !isNew }, isNew ? [forms_1.Validators.required] : []],
            isNew: [isNew, []]
        });
        if (!isNew) {
            newFormGroup.get('id').valueChanges
                .pipe((0, until_destroy_1.untilDestroyed)(this))
                .subscribe(function (value) {
                var project = _this.contributeService.projectsList.find(function (x) { return x.id === value; });
                if (project) {
                    newFormGroup.get('name').setValue(project.name, { emitEvent: false });
                    newFormGroup.get('description').setValue(project.descr, { emitEvent: false });
                    newFormGroup.get('l1').setValue(project.language1Id, { emitEvent: false });
                    newFormGroup.get('l2').setValue(project.language2Id, { emitEvent: false });
                }
                else {
                    newFormGroup.get('name').setValue('', { emitEvent: false });
                    newFormGroup.get('description').setValue('', { emitEvent: false });
                    newFormGroup.get('l1').setValue(null, { emitEvent: false });
                    newFormGroup.get('l2').setValue(null, { emitEvent: false });
                }
            });
        }
        this.form.controls.projects.insert(0, newFormGroup);
        if (this.form.controls.projects.length > 1) {
            this.form.get('projects.1.id').disable();
        }
    };
    SignUpFormComponent.prototype.removeProject = function (index) {
        this.form.controls.projects.controls.splice(index, 1);
        this.form.controls.projects.updateValueAndValidity();
        if (this.form.controls.projects.length > 0) {
            this.form.get('projects.0.id').enable();
        }
        this.contributeService.projectsList = this.contributeService.projectsList.slice();
    };
    SignUpFormComponent.prototype.filterLanguages = function (_a) {
        var languages = _a[0], index = _a[1];
        if (!languages) {
            return [];
        }
        var languagesSelected = this.form.get('proficiencyLanguages').controls.map(function (x) { return x.get('id').value; });
        languagesSelected.splice(index, 1);
        return languages.filter(function (x) { return !languagesSelected.includes(x.id); });
    };
    SignUpFormComponent.prototype.filterProjects = function (_a) {
        var projects = _a[0], index = _a[1];
        if (!projects) {
            return [];
        }
        var projectsSelected = this.form.get('projects').controls.map(function (x) { return x.get('id').value; });
        projectsSelected.splice(index, 1);
        return projects.filter(function (x) { return !projectsSelected.includes(x.id); });
    };
    SignUpFormComponent.prototype.removeLanguage = function (_a) {
        var languagesList = _a[0], languageId = _a[1];
        if (languagesList) {
            return languagesList.filter(function (x) { return x.id !== languageId; });
        }
        return [];
    };
    SignUpFormComponent.prototype.initializeForm = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            name: ['', [forms_1.Validators.required]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            proficiencyLanguages: this.formBuilder.array([]),
            projects: this.formBuilder.array([])
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
                        _this.form.get('email').setErrors({ alredyExist: true }, { emitEvent: true });
                    }
                    else {
                        _this.form.get('email').setErrors(null, { emitEvent: true });
                    }
                }, function () {
                });
            }
        });
    };
    SignUpFormComponent.prototype.saveFormValues = function () {
        var userRegister = new userRegistryViewModel_1.UserRegisterViewModel();
        userRegister.name = this.form.controls.name.value;
        userRegister.email = this.form.controls.email.value;
        userRegister.proficiencyLanguages = this.formArrayProficiencyLanguagesControls()
            .map(function (x) {
            return {
                userId: null,
                languageId: x.controls.id.value,
                levelProficiency: x.controls.levelProficiency.value
            };
        });
        userRegister.userProjects = this.formArrayProjectsControls()
            .map(function (x) {
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
                    language2Id: x.controls.l2.value
                }
            };
        });
        return userRegister;
    };
    SignUpFormComponent = __decorate([
        (0, until_destroy_1.UntilDestroy)(),
        (0, core_1.Component)({
            selector: 'app-signup-form',
            templateUrl: './signup-form.component.html',
            styleUrls: ['./signup-form.component.scss']
        })
    ], SignUpFormComponent);
    return SignUpFormComponent;
}(baseComponent_1.BaseComponent));
exports.SignUpFormComponent = SignUpFormComponent;
