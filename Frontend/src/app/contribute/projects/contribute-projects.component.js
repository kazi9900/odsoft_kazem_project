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
exports.ContributeProjectsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var until_destroy_1 = require("@ngneat/until-destroy");
var projectUserViewModel_1 = require("../../maintenance/viewmodels/projectUserViewModel");
var projectViewModel_1 = require("../../maintenance/viewmodels/projectViewModel");
var baseComponent_1 = require("../../shared/baseComponent");
var userProjectViewModel_1 = require("../viewmodels/userProjectViewModel");
var ContributeProjectsComponent = /** @class */ (function (_super) {
    __extends(ContributeProjectsComponent, _super);
    function ContributeProjectsComponent(credencialsService, contributeService, toastr, formBuilder, maintenanceService, spinner, translateService) {
        var _this = _super.call(this) || this;
        _this.credencialsService = credencialsService;
        _this.contributeService = contributeService;
        _this.toastr = toastr;
        _this.formBuilder = formBuilder;
        _this.maintenanceService = maintenanceService;
        _this.spinner = spinner;
        _this.translateService = translateService;
        _this.listUserProjects = [];
        _this.listLanguages = [];
        _this.listUsers = [];
        _this.currentProject = null;
        _this.currentUserProject = null;
        _this.modeAdd = false;
        _this.popupVisible = false;
        _this.isFormSubmitted = false;
        _this.radioButtonItems = [
            {
                text: _this.translateService.instant('Shared.Label.Autorized'),
                value: true
            },
            {
                text: _this.translateService.instant('Shared.Label.NoAutorized'),
                value: false
            },
            {
                text: _this.translateService.instant('Shared.Label.Pending'),
                value: null
            }
        ];
        return _this;
    }
    ContributeProjectsComponent.prototype.formArrayProjectUsersControls = function () {
        return this.form.get('projectUsers').controls;
    };
    ContributeProjectsComponent.prototype.ngOnInit = function () {
        this.loadregistos();
    };
    ContributeProjectsComponent.prototype.ngOnDestroy = function () {
        this.spinner.hide();
    };
    ContributeProjectsComponent.prototype.countUsersInState = function (_a) {
        var projectUsers = _a[0], state = _a[1];
        if (!projectUsers) {
            return 0;
        }
        return projectUsers.filter(function (x) { return x.isAutorized === state; }).length;
    };
    ContributeProjectsComponent.prototype.filterUsers = function (_a) {
        var users = _a[0], index = _a[1];
        if (!users) {
            return [];
        }
        var usersSelected = this.form.get('projectUsers').controls.map(function (x) { return x.get('userId').value; });
        usersSelected.splice(index, 1);
        return users.filter(function (x) { return !usersSelected.includes(x.id); });
    };
    ContributeProjectsComponent.prototype.removeLanguage = function (_a) {
        var languagesList = _a[0], languageId = _a[1];
        if (languagesList) {
            return languagesList.filter(function (x) { return x.id !== languageId; });
        }
        return [];
    };
    ContributeProjectsComponent.prototype.onSelectItem = function (project) {
        if (project) {
            this.isFormSubmitted = false;
            this.currentProject = project;
            this.initializeForm();
            this.popupVisible = true;
        }
    };
    ContributeProjectsComponent.prototype.onCancel = function () {
        this.popupVisible = false;
        this.form = null;
        this.currentProject = null;
        this.currentUserProject = null;
    };
    ContributeProjectsComponent.prototype.onSave = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.form && this.form.valid) {
            if (this.currentProject) {
                var registo = new projectViewModel_1.ProjectViewModel();
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
                registo.projectUsers = this.formArrayProjectUsersControls().map(function (x) {
                    var projectUser = new projectUserViewModel_1.ProjectUserViewModel();
                    projectUser.userId = x.get('userId').value;
                    projectUser.projectId = x.get('projectId').value;
                    projectUser.isAutorized = x.get('isAutorized').value;
                    projectUser.isprojectOwner = x.get('isprojectOwner').value;
                    return projectUser;
                });
                if (this.currentProject && this.currentProject.id) { // UPDATE
                    this.incrementIsBusy();
                    this.maintenanceService.updateProject(registo)
                        .pipe((0, until_destroy_1.untilDestroyed)(this))
                        .subscribe(function (response) {
                        _this.currentProject.copyFrom(response);
                        _this.popupVisible = false;
                        _this.form = null;
                        _this.currentProject = null;
                        _this.decrementIsBusy();
                    }, function () {
                        _this.decrementIsBusy();
                        _this.toastr.error(_this.translateService.instant('ContributeComponent.Message.ErrorUpdatingProject'));
                    });
                }
                else { // INSERT
                    this.incrementIsBusy();
                    this.maintenanceService.insertProject(registo)
                        .pipe((0, until_destroy_1.untilDestroyed)(this))
                        .subscribe(function (response) {
                        _this.currentProject = new projectViewModel_1.ProjectViewModel(response);
                        var newRegisto = new userProjectViewModel_1.UserProjectViewModel();
                        newRegisto.isAutorized = true;
                        newRegisto.isprojectOwner = true;
                        newRegisto.projectId = _this.currentProject.id;
                        newRegisto.project = _this.currentProject;
                        _this.listUserProjects.push(newRegisto);
                        _this.popupVisible = false;
                        _this.form = null;
                        _this.currentProject = null;
                        _this.currentUserProject = null;
                        _this.decrementIsBusy();
                    }, function () {
                        _this.decrementIsBusy();
                        _this.toastr.error(_this.translateService.instant('ContributeComponent.Message.ErrorInsertingNewProject'));
                    });
                }
            }
            else if (this.currentUserProject) {
                this.currentUserProject.projectId = this.form.get('id').value;
                this.contributeService.insertUserProject(this.currentUserProject)
                    .pipe((0, until_destroy_1.untilDestroyed)(this))
                    .subscribe(function (response) {
                    var newRegisto = new userProjectViewModel_1.UserProjectViewModel(response);
                    _this.listUserProjects.push(newRegisto);
                    _this.popupVisible = false;
                    _this.form = null;
                    _this.currentProject = null;
                    _this.currentUserProject = null;
                    _this.decrementIsBusy();
                }, function () {
                    _this.decrementIsBusy();
                    _this.toastr.error(_this.translateService.instant('ContributeComponent.Message.ErrorInsertingNewProject'));
                });
            }
        }
    };
    ContributeProjectsComponent.prototype.createProject = function () {
        var newProject = new projectViewModel_1.ProjectViewModel();
        var newProjectUser = new projectUserViewModel_1.ProjectUserViewModel();
        newProjectUser.userId = this.credencialsService.getCredentials.id;
        newProjectUser.userName = this.credencialsService.getCredentials.email;
        newProjectUser.isAutorized = true;
        newProjectUser.isprojectOwner = true;
        newProject.projectUsers = [newProjectUser];
        newProject.active = true;
        this.onSelectItem(newProject);
    };
    ContributeProjectsComponent.prototype.addProject = function () {
        var _this = this;
        var newUserProject = new userProjectViewModel_1.UserProjectViewModel();
        newUserProject.isprojectOwner = false;
        newUserProject.userId = this.credencialsService.getCredentials.id;
        newUserProject.isAutorized = null;
        newUserProject.projectId = null;
        this.currentUserProject = newUserProject;
        this.form = this.formBuilder.group({
            id: [null, [forms_1.Validators.required]],
            name: [{ value: null, disabled: true }],
            description: [{ value: null, disabled: true }],
            language1Id: [{ value: null, disabled: true }],
            language2Id: [{ value: null, disabled: true }]
        });
        this.form.get('id').valueChanges
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (value) {
            var project = _this.contributeService.projectsList ? _this.contributeService.projectsList.find(function (x) { return x.id === value; }) : null;
            if (project) {
                _this.form.get('name').setValue(project.name, { emitEvent: false });
                _this.form.get('description').setValue(project.descr, { emitEvent: false });
                _this.form.get('language1Id').setValue(project.language1Id, { emitEvent: false });
                _this.form.get('language2Id').setValue(project.language2Id, { emitEvent: false });
            }
            else {
                _this.form.get('name').setValue('', { emitEvent: false });
                _this.form.get('description').setValue('', { emitEvent: false });
                _this.form.get('language1Id').setValue(null, { emitEvent: false });
                _this.form.get('language2Id').setValue(null, { emitEvent: false });
            }
        });
        this.isFormSubmitted = false;
        this.popupVisible = true;
    };
    ContributeProjectsComponent.prototype.filterProjects = function (listProjects) {
        if (!listProjects) {
            return [];
        }
        var currentUserProjects = this.listUserProjects.map(function (x) { return x.projectId; });
        return listProjects.filter(function (x) { return !currentUserProjects.includes(x.id); });
    };
    ContributeProjectsComponent.prototype.loadregistos = function () {
        var _this = this;
        this.spinner.show();
        this.incrementIsBusy();
        this.contributeService
            .getUserProjects(this.credencialsService.getCredentials.id)
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (response) {
            _this.listUserProjects = response;
            _this.spinner.hide();
            _this.decrementIsBusy();
        }, function () {
            _this.toastr.error(_this.translateService.instant('Shared.Message.ErrorLoading'));
            _this.spinner.hide();
            _this.decrementIsBusy();
        });
    };
    ContributeProjectsComponent.prototype.initializeForm = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            id: [this.currentProject.id],
            name: [this.currentProject.name, [forms_1.Validators.required]],
            description: [this.currentProject.description, [forms_1.Validators.required]],
            language1Id: [this.currentProject.language1Id, [forms_1.Validators.required]],
            language2Id: [this.currentProject.language2Id, [forms_1.Validators.required]],
            active: [this.currentProject.active],
            userCreationId: [this.currentProject.userCreationId],
            dateCreation: [this.currentProject.dateCreation],
            userChangeId: [this.currentProject.userChangeId],
            dateChange: [this.currentProject.dateChange],
            projectUsers: this.formBuilder.array([])
        });
        if (this.currentProject.projectUsers) {
            this.currentProject.projectUsers.forEach(function (u) {
                var formGroup = _this.formBuilder.group({
                    userId: [u.userId, [forms_1.Validators.required]],
                    userName: [u.userName],
                    projectId: [u.projectId],
                    isprojectOwner: [{ value: u.isprojectOwner, disabled: !_this.currentProject.id }],
                    isAutorized: [{ value: u.isAutorized, disabled: u.isprojectOwner }, []]
                });
                formGroup.get('isprojectOwner').valueChanges
                    .pipe((0, until_destroy_1.untilDestroyed)(_this))
                    .subscribe(function (value) {
                    if (value) {
                        formGroup.get('isAutorized').setValue(true, { emitEvent: false });
                        formGroup.get('isAutorized').disable({ emitEvent: false });
                    }
                    else {
                        formGroup.get('isAutorized').enable({ emitEvent: false });
                    }
                });
                _this.form.get('projectUsers').push(formGroup);
            });
        }
    };
    ContributeProjectsComponent = __decorate([
        (0, until_destroy_1.UntilDestroy)(),
        (0, core_1.Component)({
            selector: 'app-contribute-projects',
            templateUrl: './contribute-projects.component.html',
            styleUrls: ['./contribute-projects.component.scss']
        })
    ], ContributeProjectsComponent);
    return ContributeProjectsComponent;
}(baseComponent_1.BaseComponent));
exports.ContributeProjectsComponent = ContributeProjectsComponent;
