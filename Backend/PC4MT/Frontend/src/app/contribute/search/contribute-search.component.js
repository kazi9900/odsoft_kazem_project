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
exports.ContributeSearchComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var until_destroy_1 = require("@ngneat/until-destroy");
var rxjs_1 = require("rxjs");
var baseComponent_1 = require("../../shared/baseComponent");
var ContributeSearchComponent = /** @class */ (function (_super) {
    __extends(ContributeSearchComponent, _super);
    function ContributeSearchComponent(credencialsService, contributeService, notificationService, toastr, spinner, translateService) {
        var _this = _super.call(this) || this;
        _this.credencialsService = credencialsService;
        _this.contributeService = contributeService;
        _this.notificationService = notificationService;
        _this.toastr = toastr;
        _this.spinner = spinner;
        _this.translateService = translateService;
        _this.language1Control = new forms_1.FormControl(null);
        _this.searchSentenceL1Control = new forms_1.FormControl('');
        _this.searchSentenceL2Control = new forms_1.FormControl('');
        _this.listSearch = [];
        _this.listenEventEmitters();
        _this.receiveNotifications();
        return _this;
    }
    ContributeSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contributeService.languagesL2Control = new forms_1.FormControl([]);
        this.contributeService.languagesL2Control.disable({ emitEvent: false });
        this.searchSentenceL1Control.disable({ emitEvent: false });
        this.searchSentenceL2Control.disable({ emitEvent: false });
        (0, rxjs_1.merge)(this.language1Control.valueChanges, this.contributeService.projectControl.valueChanges)
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function () {
            if (_this.language1Control.value) {
                _this.contributeService.languagesL2Control.enable({ emitEvent: false });
                _this.searchSentenceL1Control.enable({ emitEvent: false });
                _this.searchSentenceL2Control.enable({ emitEvent: false });
                _this.spinner.show();
                _this.incrementIsBusy();
                _this.contributeService
                    .getTranslationsFromLanguageAndProject(_this.language1Control.value, _this.contributeService.projectControl.value)
                    .pipe((0, until_destroy_1.untilDestroyed)(_this))
                    .subscribe(function (response) {
                    _this.listSearch = response;
                    _this.spinner.hide();
                    _this.decrementIsBusy();
                }, function () {
                    _this.decrementIsBusy();
                    _this.spinner.hide();
                    _this.toastr.error(_this.translateService.instant('ContributeComponent.Message.ErrorLoadingTranslations'));
                });
            }
            else {
                _this.contributeService.languagesL2Control.setValue([], { emitEvent: false });
                _this.contributeService.languagesL2Control.disable({ emitEvent: false });
                _this.searchSentenceL1Control.disable({ emitEvent: false });
                _this.searchSentenceL1Control.setValue('', { emitEvent: false });
                _this.searchSentenceL2Control.disable({ emitEvent: false });
                _this.searchSentenceL2Control.setValue('', { emitEvent: false });
                _this.listSearch = [];
            }
        });
    };
    ContributeSearchComponent.prototype.ngOnDestroy = function () {
        this.contributeService.projectControl.setValue(null, { emitEvent: false });
        this.contributeService.projectControl.enable({ emitEvent: false });
        this.spinner.hide();
    };
    ContributeSearchComponent.prototype.filtrarLista = function () {
        var _this = this;
        if (!this.listSearch) {
            return [];
        }
        if (this.searchSentenceL1Control.value.trim().length === 0 && this.searchSentenceL2Control.value.trim().length === 0 &&
            this.contributeService.languagesL2Control.value.length === 0) {
            return this.listSearch;
        }
        return this.listSearch
            .filter(function (x) { return (_this.searchSentenceL1Control.value.trim().length === 0 ||
            x.sentence.text.includes(_this.searchSentenceL1Control.value.trim())) &&
            ((_this.contributeService.languagesL2Control.value.length === 0 && _this.searchSentenceL2Control.value.trim().length === 0) ||
                x.translations
                    .filter(function (t) { return (_this.contributeService.languagesL2Control.value.length === 0 ||
                    _this.contributeService.languagesL2Control.value.includes(t.sentenceL2.languageId)) &&
                    t.sentenceL2.text.includes(_this.searchSentenceL2Control.value.trim()); }).length > 0); });
    };
    ContributeSearchComponent.prototype.removeLanguage1 = function (_a) {
        var listLanguage = _a[0], language1 = _a[1];
        if (!language1) {
            return listLanguage;
        }
        if (!listLanguage) {
            return [];
        }
        return listLanguage.filter(function (x) { return x.id !== language1; });
    };
    ContributeSearchComponent.prototype.listenEventEmitters = function () {
        var _this = this;
        this.contributeService.projectControl.valueChanges
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (value) {
            if (value) {
                var project = _this.contributeService.projectsList.find(function (x) { return x.id === value; });
                _this.language1Control.setValue(project.language1Id, { emitEvent: false });
                _this.language1Control.disable();
                _this.contributeService.languagesL2Control.setValue([project.language2Id], { emitEvent: false });
            }
            else {
                _this.language1Control.setValue(null, { emitEvent: false });
                _this.language1Control.enable();
                _this.contributeService.languagesL2Control.setValue([], { emitEvent: false });
            }
        });
    };
    ContributeSearchComponent.prototype.receiveNotifications = function () {
        var _this = this;
        this.notificationService.translationLikeAdded
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (data) {
            _this.listSearch.forEach(function (x) {
                var translation = x.translations.find(function (y) { return y.id === data.translationId; });
                if (translation) {
                    translation.translationLikes.push(data);
                    translation.translationLikes = translation.translationLikes.slice();
                }
            });
        });
        this.notificationService.translationLikeUpdated
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (data) {
            _this.listSearch.forEach(function (x) {
                var translation = x.translations.find(function (y) { return y.id === data.translationId; });
                if (translation) {
                    var translationLike = translation.translationLikes.find(function (y) { return y.userId === data.userId; });
                    if (translationLike) {
                        translationLike.like = data.like;
                        translation.translationLikes = translation.translationLikes.slice();
                    }
                }
            });
        });
    };
    ContributeSearchComponent = __decorate([
        (0, until_destroy_1.UntilDestroy)(),
        (0, core_1.Component)({
            selector: 'app-contribute-search',
            templateUrl: './contribute-search.component.html',
            styleUrls: ['./contribute-search.component.scss']
        })
    ], ContributeSearchComponent);
    return ContributeSearchComponent;
}(baseComponent_1.BaseComponent));
exports.ContributeSearchComponent = ContributeSearchComponent;
