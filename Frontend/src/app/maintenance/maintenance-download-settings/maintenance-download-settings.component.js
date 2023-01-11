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
exports.MaintenanceDownloadSettingsComponent = void 0;
var core_1 = require("@angular/core");
var until_destroy_1 = require("@ngneat/until-destroy");
var baseComponent_1 = require("../../shared/baseComponent");
var downloadSettingsViewModel_1 = require("../viewmodels/downloadSettingsViewModel");
var MaintenanceDownloadSettingsComponent = /** @class */ (function (_super) {
    __extends(MaintenanceDownloadSettingsComponent, _super);
    function MaintenanceDownloadSettingsComponent(formBuilder, toastr, maintenanceService, spinner) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.toastr = toastr;
        _this.maintenanceService = maintenanceService;
        _this.spinner = spinner;
        _this.popupVisible = false;
        return _this;
    }
    MaintenanceDownloadSettingsComponent.prototype.ngOnInit = function () {
        this.loadRegistos();
    };
    MaintenanceDownloadSettingsComponent.prototype.ngOnDestroy = function () {
        this.spinner.hide();
    };
    MaintenanceDownloadSettingsComponent.prototype.onOpenPopupForm = function () {
        this.initializeForm();
        this.popupVisible = true;
    };
    MaintenanceDownloadSettingsComponent.prototype.onCancel = function () {
        this.popupVisible = false;
        this.form = null;
    };
    MaintenanceDownloadSettingsComponent.prototype.onSave = function () {
        var _this = this;
        if (this.form && this.form.valid) {
            var registo = new downloadSettingsViewModel_1.DownloadSettignsViewModel();
            registo.maxSentencesPerDownload = this.form.get('maxSentencesPerDownload').value;
            registo.maxSentencesPerUser = this.form.get('maxSentencesPerUser').value;
            registo.maxSentencesL1L2 = this.form.get('maxSentencesL1L2').value;
            registo.maxDownloadsPerUser = this.form.get('maxDownloadsPerUser').value;
            if (this.downloadSettings) { // UPDATE
                this.incrementIsBusy();
                this.maintenanceService.updateDownloadSettings(registo)
                    .pipe((0, until_destroy_1.untilDestroyed)(this))
                    .subscribe(function (response) {
                    _this.downloadSettings.copyFrom(response);
                    _this.popupVisible = false;
                    _this.form = null;
                    _this.decrementIsBusy();
                }, function () {
                    _this.decrementIsBusy();
                    _this.toastr.error('Erro ao atualizar configurações de download');
                });
            }
            else { // INSERT
                this.incrementIsBusy();
                this.maintenanceService.insertDownloadSettings(registo)
                    .pipe((0, until_destroy_1.untilDestroyed)(this))
                    .subscribe(function (response) {
                    _this.downloadSettings = new downloadSettingsViewModel_1.DownloadSettignsViewModel(response);
                    _this.popupVisible = false;
                    _this.form = null;
                    _this.decrementIsBusy();
                }, function () {
                    _this.decrementIsBusy();
                    _this.toastr.error('Erro ao inserir configurações de download');
                });
            }
        }
    };
    MaintenanceDownloadSettingsComponent.prototype.loadRegistos = function () {
        var _this = this;
        this.spinner.show();
        this.incrementIsBusy();
        this.maintenanceService.getDownloadSettings()
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (response) {
            _this.downloadSettings = response;
            _this.decrementIsBusy();
            _this.spinner.hide();
        }, function () {
            _this.decrementIsBusy();
            _this.spinner.hide();
            _this.toastr.error('Erro ao carregar dados');
        });
    };
    MaintenanceDownloadSettingsComponent.prototype.initializeForm = function () {
        this.form = this.formBuilder.group({
            maxSentencesPerDownload: [this.downloadSettings ? this.downloadSettings.maxSentencesPerDownload : null],
            maxSentencesPerUser: [this.downloadSettings ? this.downloadSettings.maxSentencesPerUser : null],
            maxSentencesL1L2: [this.downloadSettings ? this.downloadSettings.maxSentencesL1L2 : null],
            maxDownloadsPerUser: [this.downloadSettings ? this.downloadSettings.maxDownloadsPerUser : null]
        });
    };
    MaintenanceDownloadSettingsComponent = __decorate([
        (0, until_destroy_1.UntilDestroy)(),
        (0, core_1.Component)({
            selector: 'app-maintenance-download-settings',
            templateUrl: './maintenance-download-settings.component.html',
            styleUrls: ['./maintenance-download-settings.component.scss']
        })
    ], MaintenanceDownloadSettingsComponent);
    return MaintenanceDownloadSettingsComponent;
}(baseComponent_1.BaseComponent));
exports.MaintenanceDownloadSettingsComponent = MaintenanceDownloadSettingsComponent;
