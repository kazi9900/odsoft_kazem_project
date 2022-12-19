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
exports.MaintenanceLanguagesComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var until_destroy_1 = require("@ngneat/until-destroy");
var baseComponent_1 = require("../../shared/baseComponent");
var languageViewModel_1 = require("../viewmodels/languageViewModel");
var MaintenanceLanguagesComponent = /** @class */ (function (_super) {
    __extends(MaintenanceLanguagesComponent, _super);
    function MaintenanceLanguagesComponent(formBuilder, toastr, maintenanceService, spinner) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.toastr = toastr;
        _this.maintenanceService = maintenanceService;
        _this.spinner = spinner;
        _this.currentLanguage = null;
        _this.popupVisible = false;
        _this.isFormSubmitted = false;
        _this.typesLanguage = [
            { id: 1, descr: 'Spoken Language' },
            { id: 2, descr: 'Sign Language' }
        ];
        return _this;
    }
    MaintenanceLanguagesComponent.prototype.ngOnInit = function () {
        this.loadRegistos();
    };
    MaintenanceLanguagesComponent.prototype.ngOnDestroy = function () {
        this.spinner.hide();
    };
    MaintenanceLanguagesComponent.prototype.onAddLanguage = function () {
        var newLanguage = new languageViewModel_1.LanguageViewModel();
        this.onSelectItem(newLanguage);
    };
    MaintenanceLanguagesComponent.prototype.onSelectItem = function (language) {
        this.isFormSubmitted = false;
        this.currentLanguage = language;
        this.initializeForm();
        this.popupVisible = true;
    };
    MaintenanceLanguagesComponent.prototype.onCancel = function () {
        this.popupVisible = false;
        this.form = null;
        this.currentLanguage = null;
    };
    MaintenanceLanguagesComponent.prototype.onSave = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.form && this.form.valid) {
            var registo = new languageViewModel_1.LanguageViewModel();
            registo.id = this.form.get('id').value;
            registo.name = this.form.get('name').value;
            registo.abbreviation = this.form.get('abbreviation').value;
            registo.type = this.form.get('type').value;
            if (this.currentLanguage && this.currentLanguage.id) { // UPDATE
                this.incrementIsBusy();
                this.maintenanceService.updateLanguage(registo)
                    .pipe((0, until_destroy_1.untilDestroyed)(this))
                    .subscribe(function (response) {
                    _this.currentLanguage.copyFrom(response);
                    _this.popupVisible = false;
                    _this.form = null;
                    _this.currentLanguage = null;
                    _this.decrementIsBusy();
                }, function () {
                    _this.decrementIsBusy();
                    _this.toastr.error('Erro ao atualizar a língua');
                });
            }
            else { // INSERT
                this.incrementIsBusy();
                this.maintenanceService.insertLanguage(registo)
                    .pipe((0, until_destroy_1.untilDestroyed)(this))
                    .subscribe(function (response) {
                    _this.currentLanguage = new languageViewModel_1.LanguageViewModel(response);
                    _this.listLanguages.push(_this.currentLanguage);
                    _this.popupVisible = false;
                    _this.form = null;
                    _this.currentLanguage = null;
                    _this.decrementIsBusy();
                }, function () {
                    _this.decrementIsBusy();
                    _this.toastr.error('Erro ao inserir nova língua');
                });
            }
        }
    };
    MaintenanceLanguagesComponent.prototype.getTypeLanguageDescr = function (id) {
        var typeLanguage = this.typesLanguage.find(function (x) { return x.id === id; });
        return typeLanguage ? typeLanguage.descr : '';
    };
    MaintenanceLanguagesComponent.prototype.loadRegistos = function () {
        var _this = this;
        this.spinner.show();
        this.incrementIsBusy();
        this.maintenanceService.getLanguages()
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (response) {
            _this.listLanguages = response;
            _this.decrementIsBusy();
            _this.spinner.hide();
        }, function () {
            _this.decrementIsBusy();
            _this.spinner.hide();
            _this.toastr.error('Erro ao carregar dados');
        });
    };
    MaintenanceLanguagesComponent.prototype.initializeForm = function () {
        this.form = this.formBuilder.group({
            id: [this.currentLanguage.id],
            name: [this.currentLanguage.name, [forms_1.Validators.required]],
            abbreviation: [this.currentLanguage.abbreviation, [forms_1.Validators.required]],
            type: [this.currentLanguage.type, [forms_1.Validators.required]]
        });
    };
    MaintenanceLanguagesComponent = __decorate([
        (0, until_destroy_1.UntilDestroy)(),
        (0, core_1.Component)({
            selector: 'app-maintenance-languages',
            templateUrl: './maintenance-languages.component.html',
            styleUrls: ['./maintenance-languages.component.scss']
        })
    ], MaintenanceLanguagesComponent);
    return MaintenanceLanguagesComponent;
}(baseComponent_1.BaseComponent));
exports.MaintenanceLanguagesComponent = MaintenanceLanguagesComponent;
