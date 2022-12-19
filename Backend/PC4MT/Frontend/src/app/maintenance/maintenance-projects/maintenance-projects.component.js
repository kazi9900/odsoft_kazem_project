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
exports.MaintenanceProjectsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var until_destroy_1 = require("@ngneat/until-destroy");
var rxjs_1 = require("rxjs");
var baseComponent_1 = require("../../shared/baseComponent");
var projectUserViewModel_1 = require("../viewmodels/projectUserViewModel");
var projectViewModel_1 = require("../viewmodels/projectViewModel");
var MaintenanceProjectsComponent = /** @class */ (function (_super) {
    __extends(MaintenanceProjectsComponent, _super);
    function MaintenanceProjectsComponent(formBuilder, toastr, maintenanceService, spinner) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.toastr = toastr;
        _this.maintenanceService = maintenanceService;
        _this.spinner = spinner;
        _this.listLanguages = [];
        _this.listUsers = [];
        _this.currentProject = null;
        _this.popupVisible = false;
        _this.isFormSubmitted = false;
        return _this;
    }
    MaintenanceProjectsComponent.prototype.formArrayProjectUsersControls = function () {
        return this.form.get('projectUsers').controls;
    };
    MaintenanceProjectsComponent.prototype.ngOnInit = function () {
        this.loadDados();
    };
    MaintenanceProjectsComponent.prototype.ngOnDestroy = function () {
        this.spinner.hide();
    };
    MaintenanceProjectsComponent.prototype.addProjectUser = function () {
        var newFormGroup = this.formBuilder.group({
            userId: [null, [forms_1.Validators.required]],
            userName: [null],
            projectId: [null],
            isprojectOwner: [null],
            isAutorized: [true]
        });
        this.form.controls.projectUsers.insert(0, newFormGroup);
        if (this.form.controls.projectUsers.length > 1) {
            this.form.get('projectUsers.1.userId').disable();
        }
    };
    MaintenanceProjectsComponent.prototype.removeProjectUser = function (index) {
        this.form.controls.projectUsers.controls.splice(index, 1);
        this.form.controls.projectUsers.updateValueAndValidity();
        if (this.form.controls.projectUsers.length > 0) {
            this.form.get('projectUsers.0.userId').enable();
        }
        this.listUsers = this.listUsers.slice();
    };
    MaintenanceProjectsComponent.prototype.onAddProject = function () {
        var newProject = new projectViewModel_1.ProjectViewModel();
        this.onSelectItem(newProject);
    };
    MaintenanceProjectsComponent.prototype.onSelectItem = function (project) {
        this.isFormSubmitted = false;
        this.currentProject = project;
        this.initializeForm();
        this.popupVisible = true;
    };
    MaintenanceProjectsComponent.prototype.onCancel = function () {
        this.popupVisible = false;
        this.form = null;
        this.currentProject = null;
    };
    MaintenanceProjectsComponent.prototype.onSave = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.form && this.form.valid) {
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
                    _this.toastr.error('Erro ao atualizar o projecto');
                });
            }
            else { // INSERT
                this.incrementIsBusy();
                this.maintenanceService.insertProject(registo)
                    .pipe((0, until_destroy_1.untilDestroyed)(this))
                    .subscribe(function (response) {
                    _this.currentProject = new projectViewModel_1.ProjectViewModel(response);
                    _this.listProjects.push(_this.currentProject);
                    _this.popupVisible = false;
                    _this.form = null;
                    _this.currentProject = null;
                    _this.decrementIsBusy();
                }, function () {
                    _this.decrementIsBusy();
                    _this.toastr.error('Erro ao inserir novo projecto');
                });
            }
        }
    };
    MaintenanceProjectsComponent.prototype.getLanguageName = function (id) {
        var language = this.listLanguages.find(function (x) { return x.id === id; });
        return language ? language.name : '';
    };
    MaintenanceProjectsComponent.prototype.filterUsers = function (_a) {
        var users = _a[0], index = _a[1];
        if (!users) {
            return [];
        }
        var usersSelected = this.form.get('projectUsers').controls.map(function (x) { return x.get('userId').value; });
        usersSelected.splice(index, 1);
        return users.filter(function (x) { return !usersSelected.includes(x.id); });
    };
    MaintenanceProjectsComponent.prototype.removeLanguage = function (_a) {
        var languagesList = _a[0], languageId = _a[1];
        if (languagesList) {
            return languagesList.filter(function (x) { return x.id !== languageId; });
        }
        return [];
    };
    MaintenanceProjectsComponent.prototype.loadDados = function () {
        var _this = this;
        this.spinner.show();
        this.incrementIsBusy();
        (0, rxjs_1.forkJoin)([
            this.maintenanceService.getLanguages(),
            this.maintenanceService.getUsersLight()
        ])
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (_a) {
            var languages = _a[0], users = _a[1];
            _this.listLanguages = languages;
            _this.listUsers = users;
            _this.loadRegistos();
            _this.decrementIsBusy();
            _this.spinner.hide();
        }, function () {
            _this.decrementIsBusy();
            _this.spinner.hide();
            _this.toastr.error('Erro ao carregar dados');
        });
    };
    MaintenanceProjectsComponent.prototype.loadRegistos = function () {
        var _this = this;
        this.incrementIsBusy();
        this.maintenanceService.getProjects()
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (response) {
            _this.listProjects = response;
            _this.decrementIsBusy();
        }, function () {
            _this.decrementIsBusy();
            _this.toastr.error('Erro ao carregar registos');
        });
    };
    MaintenanceProjectsComponent.prototype.initializeForm = function () {
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
            projectUsers: this.formBuilder.array(this.currentProject.projectUsers.map(function (u) { return _this.formBuilder.group({
                userId: [u.userId, [forms_1.Validators.required]],
                userName: [u.userName],
                projectId: [u.projectId],
                isprojectOwner: [u.isprojectOwner],
                isAutorized: [u.isAutorized]
            }); }))
        });
    };
    MaintenanceProjectsComponent = __decorate([
        (0, until_destroy_1.UntilDestroy)(),
        (0, core_1.Component)({
            selector: 'app-maintenance-projects',
            templateUrl: './maintenance-projects.component.html',
            styleUrls: ['./maintenance-projects.component.scss']
        })
    ], MaintenanceProjectsComponent);
    return MaintenanceProjectsComponent;
}(baseComponent_1.BaseComponent));
exports.MaintenanceProjectsComponent = MaintenanceProjectsComponent;
