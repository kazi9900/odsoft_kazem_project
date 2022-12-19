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
exports.MaintenanceUsersComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var until_destroy_1 = require("@ngneat/until-destroy");
var baseComponent_1 = require("../../shared/baseComponent");
var roleEnum_1 = require("../../shared/helpers/roleEnum");
var userRoleViewModel_1 = require("../viewmodels/userRoleViewModel");
var userViewModel_1 = require("../viewmodels/userViewModel");
var MaintenanceUsersComponent = /** @class */ (function (_super) {
    __extends(MaintenanceUsersComponent, _super);
    function MaintenanceUsersComponent(formBuilder, toastr, maintenanceService, spinner) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.toastr = toastr;
        _this.maintenanceService = maintenanceService;
        _this.spinner = spinner;
        _this.listRoles = [
            { id: roleEnum_1.RoleEnum.Root, name: 'Root' },
            { id: roleEnum_1.RoleEnum.Admin, name: 'Admin' },
            { id: roleEnum_1.RoleEnum.Editor, name: 'Editor' },
            { id: roleEnum_1.RoleEnum.Regular, name: 'Regular' },
        ];
        _this.currentUser = null;
        _this.popupVisible = false;
        _this.isFormSubmitted = false;
        return _this;
    }
    MaintenanceUsersComponent.prototype.ngOnInit = function () {
        this.loadRegistos();
    };
    MaintenanceUsersComponent.prototype.ngOnDestroy = function () {
        this.spinner.hide();
    };
    MaintenanceUsersComponent.prototype.onSelectItem = function (user) {
        this.isFormSubmitted = false;
        this.currentUser = user;
        this.initializeForm();
        this.popupVisible = true;
    };
    MaintenanceUsersComponent.prototype.onCancel = function () {
        this.popupVisible = false;
        this.form = null;
        this.currentUser = null;
        this.isFormSubmitted = false;
    };
    MaintenanceUsersComponent.prototype.onSave = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.form && this.form.valid) {
            var registo = new userViewModel_1.UserViewModel();
            registo.id = this.form.get('id').value;
            registo.name = this.form.get('name').value;
            registo.email = this.form.get('email').value;
            registo.userRoles = [];
            if (this.form.get('roleId').value) {
                var role = new userRoleViewModel_1.UserRoleViewModel();
                role.userId = this.form.get('id').value;
                role.roleId = this.form.get('roleId').value;
                registo.userRoles.push(role);
            }
            if (this.currentUser && this.currentUser.id) { // UPDATE
                this.incrementIsBusy();
                this.maintenanceService.updateUser(registo)
                    .pipe((0, until_destroy_1.untilDestroyed)(this))
                    .subscribe(function (response) {
                    _this.currentUser.copyFrom(response);
                    _this.popupVisible = false;
                    _this.form = null;
                    _this.currentUser = null;
                    _this.decrementIsBusy();
                }, function () {
                    _this.decrementIsBusy();
                    _this.toastr.error('Erro ao atualizar o utilizador');
                });
            }
            else { // INSERT
                this.incrementIsBusy();
                this.maintenanceService.insertUser(registo)
                    .pipe((0, until_destroy_1.untilDestroyed)(this))
                    .subscribe(function (response) {
                    _this.currentUser = new userViewModel_1.UserViewModel(response);
                    _this.listUsers.push(_this.currentUser);
                    _this.popupVisible = false;
                    _this.form = null;
                    _this.currentUser = null;
                    _this.decrementIsBusy();
                }, function () {
                    _this.decrementIsBusy();
                    _this.toastr.error('Erro ao inserir novo utilizador');
                });
            }
        }
    };
    MaintenanceUsersComponent.prototype.loadRegistos = function () {
        var _this = this;
        this.spinner.show();
        this.incrementIsBusy();
        this.maintenanceService.getUsers()
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (response) {
            _this.listUsers = response;
            _this.decrementIsBusy();
            _this.spinner.hide();
        }, function () {
            _this.decrementIsBusy();
            _this.spinner.hide();
            _this.toastr.error('Erro ao carregar registos');
        });
    };
    MaintenanceUsersComponent.prototype.initializeForm = function () {
        this.form = this.formBuilder.group({
            id: [this.currentUser.id],
            name: [{ value: this.currentUser.name, disabled: true }, [forms_1.Validators.required]],
            email: [{ value: this.currentUser.email, disabled: true }, [forms_1.Validators.required]],
            roleId: [this.currentUser.userRoles && this.currentUser.userRoles[0] ? this.currentUser.userRoles[0].roleId : null, []]
        });
    };
    MaintenanceUsersComponent = __decorate([
        (0, until_destroy_1.UntilDestroy)(),
        (0, core_1.Component)({
            selector: 'app-maintenance-users',
            templateUrl: './maintenance-users.component.html',
            styleUrls: ['./maintenance-users.component.scss']
        })
    ], MaintenanceUsersComponent);
    return MaintenanceUsersComponent;
}(baseComponent_1.BaseComponent));
exports.MaintenanceUsersComponent = MaintenanceUsersComponent;
