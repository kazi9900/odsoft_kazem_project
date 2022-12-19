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
exports.ContributeDownloadComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var until_destroy_1 = require("@ngneat/until-destroy");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var baseComponent_1 = require("../../shared/baseComponent");
var ContributeDownloadComponent = /** @class */ (function (_super) {
    __extends(ContributeDownloadComponent, _super);
    function ContributeDownloadComponent(contributeService, translateService, spinner, toastr) {
        var _this = _super.call(this) || this;
        _this.contributeService = contributeService;
        _this.translateService = translateService;
        _this.spinner = spinner;
        _this.toastr = toastr;
        _this.language1Control = new forms_1.FormControl(null);
        _this.language2Control = new forms_1.FormControl(null);
        _this.searchL1Control = new forms_1.FormControl('');
        _this.searchL2Control = new forms_1.FormControl('');
        _this.listTranslationsToExport = [];
        _this.listTranslationsToExportFiltered = [];
        _this.setting = {
            element: {
                dynamicDownload: null
            }
        };
        return _this;
    }
    ContributeDownloadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchL1Control.disable({ emitEvent: false });
        this.searchL2Control.disable({ emitEvent: false });
        (0, rxjs_1.merge)(this.language1Control.valueChanges, this.language2Control.valueChanges)
            .pipe((0, operators_1.debounceTime)(300), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function () {
            if (_this.language1Control.value && _this.language2Control.value) {
                _this.searchL1Control.enable({ emitEvent: false });
                _this.searchL2Control.enable({ emitEvent: false });
            }
            else {
                _this.searchL1Control.setValue('', { emitEvent: false });
                _this.searchL2Control.setValue('', { emitEvent: false });
                _this.searchL1Control.disable({ emitEvent: false });
                _this.searchL2Control.disable({ emitEvent: false });
            }
            _this.loadRegistos();
        });
        (0, rxjs_1.merge)(this.searchL1Control.valueChanges, this.searchL2Control.valueChanges)
            .pipe((0, operators_1.debounceTime)(300), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function () {
            _this.filterListTranslationsToExport();
        });
        this.listenEventEmitters();
    };
    ContributeDownloadComponent.prototype.ngOnDestroy = function () {
        this.contributeService.projectControl.setValue(null, { emitEvent: false });
        this.contributeService.projectControl.enable({ emitEvent: false });
        this.spinner.hide();
    };
    ContributeDownloadComponent.prototype.removeLanguage = function (_a) {
        var languagesList = _a[0], languageId = _a[1];
        if (languagesList) {
            return languagesList.filter(function (x) { return x.id !== languageId; });
        }
        return [];
    };
    ContributeDownloadComponent.prototype.onExportFile = function () {
        var _this = this;
        var language1 = this.contributeService.languagesList.find(function (x) { return x.id === _this.language1Control.value; });
        var language2 = this.contributeService.languagesList.find(function (x) { return x.id === _this.language2Control.value; });
        var exportData = this.listTranslationsToExportFiltered.map(function (x) {
            var e = {};
            e[language1.name + ' - ' + language1.abbreviation] = x.sentenceL1;
            e[language2.name + ' - ' + language2.abbreviation] = x.sentenceL2;
            return e;
        });
        this.dyanmicDownloadByHtmlTag({
            fileName: 'Translations.json',
            fileType: 'text/json',
            text: JSON.stringify(exportData, null, '\t')
        });
    };
    ContributeDownloadComponent.prototype.dyanmicDownloadByHtmlTag = function (arg) {
        if (!this.setting.element.dynamicDownload) {
            this.setting.element.dynamicDownload = document.createElement('a');
        }
        var element = this.setting.element.dynamicDownload;
        element.setAttribute('href', "data:".concat(arg.fileType, ";charset=utf-8,").concat(encodeURIComponent(arg.text)));
        element.setAttribute('download', arg.fileName);
        var event = new MouseEvent('click');
        element.dispatchEvent(event);
    };
    ContributeDownloadComponent.prototype.loadRegistos = function () {
        var _this = this;
        if (this.language1Control.value && this.language2Control.value) {
            this.spinner.show();
            this.incrementIsBusy();
            this.contributeService
                .getTranslationsFromLanguage1ToLanguage2AndProject(this.language1Control.value, this.language2Control.value, this.contributeService.projectControl.value)
                .pipe((0, until_destroy_1.untilDestroyed)(this))
                .subscribe(function (response) {
                _this.decrementIsBusy();
                _this.listTranslationsToExport = response;
                _this.filterListTranslationsToExport();
                _this.spinner.hide();
            }, function () {
                _this.decrementIsBusy();
                _this.spinner.hide();
                _this.toastr.error(_this.translateService.instant('Shared.Message.ErrorLoading'));
            });
        }
        else {
            this.listTranslationsToExport = [];
            this.listTranslationsToExportFiltered = [];
        }
    };
    ContributeDownloadComponent.prototype.filterListTranslationsToExport = function () {
        var _this = this;
        this.listTranslationsToExportFiltered = this.listTranslationsToExport
            .filter(function (x) {
            return (_this.searchL1Control.value.trim().length === 0 ||
                x.sentenceL1.toLowerCase().includes(_this.searchL1Control.value.trim().toLowerCase())) &&
                (_this.searchL2Control.value.trim().length === 0 ||
                    x.sentenceL2.toLowerCase().includes(_this.searchL2Control.value.trim().toLowerCase()));
        });
    };
    ContributeDownloadComponent.prototype.listenEventEmitters = function () {
        var _this = this;
        this.contributeService.projectControl.valueChanges
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (value) {
            if (value) {
                var project = _this.contributeService.projectsList.find(function (x) { return x.id === value; });
                _this.language1Control.setValue(project.language1Id, { emitEvent: false });
                _this.language2Control.setValue(project.language2Id);
                _this.language1Control.disable({ emitEvent: false });
                _this.language2Control.disable({ emitEvent: false });
                _this.searchL1Control.enable({ emitEvent: false });
                _this.searchL2Control.enable({ emitEvent: false });
            }
            else {
                _this.language1Control.setValue(null, { emitEvent: false });
                _this.language2Control.setValue(null);
                _this.language1Control.enable({ emitEvent: false });
                _this.language2Control.enable({ emitEvent: false });
            }
        });
    };
    ContributeDownloadComponent = __decorate([
        (0, until_destroy_1.UntilDestroy)(),
        (0, core_1.Component)({
            selector: 'app-contribute-download',
            templateUrl: './contribute-download.component.html',
            styleUrls: ['./contribute-download.component.scss']
        })
    ], ContributeDownloadComponent);
    return ContributeDownloadComponent;
}(baseComponent_1.BaseComponent));
exports.ContributeDownloadComponent = ContributeDownloadComponent;
