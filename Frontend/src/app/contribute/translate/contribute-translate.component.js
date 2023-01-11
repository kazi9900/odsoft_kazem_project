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
exports.ContributeTranslateComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var until_destroy_1 = require("@ngneat/until-destroy");
var ngx_virtual_scroller_1 = require("ngx-virtual-scroller");
var rxjs_1 = require("rxjs");
var baseComponent_1 = require("../../shared/baseComponent");
var sentenceViewModel_1 = require("../viewmodels/sentenceViewModel");
var ContributeTranslateComponent = /** @class */ (function (_super) {
    __extends(ContributeTranslateComponent, _super);
    function ContributeTranslateComponent(router, credencialsService, contributeService, toastr, spinner, translateService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.credencialsService = credencialsService;
        _this.contributeService = contributeService;
        _this.toastr = toastr;
        _this.spinner = spinner;
        _this.translateService = translateService;
        _this.language1Control = new forms_1.FormControl(null);
        _this.language2Control = new forms_1.FormControl(null);
        _this.searchSentenceL1Control = new forms_1.FormControl({ value: '', disabled: true });
        _this.searchSentenceL2Control = new forms_1.FormControl({ value: '', disabled: true });
        _this.listSentencesSpokenLanguage = [];
        _this.popupVisible = false;
        _this.popupFileImportVisible = false;
        _this.sentencesToImport = [];
        _this.languageMissingLevelProficiency = null;
        _this.proficiencyLanguage = null;
        _this.listenEventEmitters();
        return _this;
    }
    ContributeTranslateComponent.prototype.ngOnDestroy = function () {
        this.contributeService.projectControl.setValue(null, { emitEvent: false });
        this.contributeService.projectControl.enable({ emitEvent: false });
        this.contributeService.sentenceSelect = null;
        this.spinner.hide();
    };
    ContributeTranslateComponent.prototype.onCancel = function () {
        this.popupFileImportVisible = false;
        this.sentencesToImport = [];
        this.contributeService.fileImportControl.setValue(null, { emitEvent: false });
    };
    ContributeTranslateComponent.prototype.onSave = function () {
        var _this = this;
        this.incrementIsBusy();
        this.contributeService.insertSentences(this.sentencesToImport)
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (response) {
            var _a;
            _this.popupFileImportVisible = false;
            _this.sentencesToImport = [];
            (_a = _this.listSentencesSpokenLanguage).push.apply(_a, response);
            _this.listSentencesSpokenLanguage = _this.listSentencesSpokenLanguage.slice();
            _this.contributeService.fileImportControl.setValue(null, { emitEvent: false });
        }, function () {
            _this.toastr.error(_this.translateService.instant('ContributeService.Message.ErrorSavingSenteces'));
            _this.decrementIsBusy();
        });
    };
    ContributeTranslateComponent.prototype.showButtonImport = function () {
        var _this = this;
        if (this.router.url.includes('contribute/translate') &&
            this.contributeService.projectControl.value &&
            this.credencialsService.currentUser &&
            this.credencialsService.currentUser.userProjects &&
            this.credencialsService.currentUser.userProjects
                .some(function (x) { return x.projectId === _this.contributeService.projectControl.value && x.isProjectOwner; })) {
            return true;
        }
        return false;
    };
    ContributeTranslateComponent.prototype.onLoadTranslations = function () {
        var _this = this;
        if (this.language1Control.value && this.language2Control.value) {
            this.spinner.show();
            this.searchSentenceL1Control.enable({ emitEvent: false });
            this.searchSentenceL2Control.enable({ emitEvent: false });
            this.incrementIsBusy();
            this.contributeService.getSentecesWithLastTranslation(this.language1Control.value, this.language2Control.value, this.contributeService.projectControl.value)
                .pipe((0, until_destroy_1.untilDestroyed)(this))
                .subscribe(function (response) {
                _this.decrementIsBusy();
                _this.listSentencesSpokenLanguage = response.map(function (x) { return new sentenceViewModel_1.SentenceViewModel(x); });
                _this.spinner.hide();
            }, function () {
                _this.decrementIsBusy();
                _this.spinner.hide();
                _this.toastr.error(_this.translateService.instant('ContributeComponent.Message.ErrorLoadingSentences'));
            });
        }
        else {
            this.searchSentenceL1Control.disable({ emitEvent: false });
            this.searchSentenceL2Control.disable({ emitEvent: false });
            this.searchSentenceL1Control.setValue('', { emitEvent: false });
            this.searchSentenceL2Control.setValue('', { emitEvent: false });
            this.listSentencesSpokenLanguage = [];
        }
    };
    ContributeTranslateComponent.prototype.onCheckLevelProfeciencyAndLoadTranslations = function () {
        var _this = this;
        if (this.credencialsService.isAuthenticated()) {
            if (this.language1Control.value &&
                !this.credencialsService.currentUser.proficiencyLanguages.some(function (x) { return x.languageId === _this.language1Control.value; })) {
                this.openPopupMissingLevelProficiency(this.language1Control.value);
                return;
            }
            if (this.language2Control.value &&
                !this.credencialsService.currentUser.proficiencyLanguages.some(function (x) { return x.languageId === _this.language2Control.value; })) {
                this.openPopupMissingLevelProficiency(this.language2Control.value);
                return;
            }
        }
        this.onLoadTranslations();
    };
    ContributeTranslateComponent.prototype.openPopupMissingLevelProficiency = function (languageId) {
        this.languageMissingLevelProficiency = this.contributeService.languagesList.find(function (x) { return x.id === languageId; });
        this.proficiencyLanguage = {
            languageId: languageId,
            userId: this.credencialsService.getCredentials.id,
            levelProficiency: 0
        };
        this.popupVisible = true;
    };
    ContributeTranslateComponent.prototype.onHiddenPopup = function () {
        if (this.proficiencyLanguage) {
            if (this.proficiencyLanguage.languageId === this.language1Control.value) {
                this.language1Control.setValue(null, { emitEvent: false });
            }
            if (this.proficiencyLanguage.languageId === this.language2Control.value) {
                this.language2Control.setValue(null, { emitEvent: false });
            }
            if (this.contributeService.projectControl.value) {
                this.contributeService.projectControl.setValue(null);
            }
            this.proficiencyLanguage = null;
            this.languageMissingLevelProficiency = null;
        }
    };
    ContributeTranslateComponent.prototype.saveLanguageProficiency = function () {
        var _this = this;
        if (this.proficiencyLanguage) {
            this.contributeService.insertProficiencyLanguage(this.proficiencyLanguage)
                .pipe((0, until_destroy_1.untilDestroyed)(this))
                .subscribe(function (response) {
                if (response) {
                    _this.credencialsService.currentUser.proficiencyLanguages.push(response);
                    _this.proficiencyLanguage = null;
                    _this.popupVisible = null;
                    _this.languageMissingLevelProficiency = null;
                    _this.onCheckLevelProfeciencyAndLoadTranslations();
                }
            }, function () {
                _this.toastr.error(_this.translateService.instant('ContributeComponent.Message.ErrorSavingLanguageProficiency'));
            });
        }
    };
    ContributeTranslateComponent.prototype.onClickNewLine = function () {
        var _this = this;
        var newRegistoSentence = new sentenceViewModel_1.SentenceViewModel();
        newRegistoSentence.languageId = this.language1Control.value;
        newRegistoSentence.text = '';
        newRegistoSentence.lastSentenceTranslation = new sentenceViewModel_1.SentenceViewModel();
        newRegistoSentence.lastSentenceTranslation.languageId = this.language2Control.value;
        newRegistoSentence.lastSentenceTranslation.text = '';
        this.listSentencesSpokenLanguage.unshift(newRegistoSentence);
        this.listSentencesSpokenLanguage = this.listSentencesSpokenLanguage.slice();
        this.contributeService.sentenceSelect = newRegistoSentence;
        this.searchSentenceL1Control.disable({ emitEvent: false });
        this.searchSentenceL2Control.disable({ emitEvent: false });
        this.contributeService.projectControl.disable({ emitEvent: false });
        setTimeout(function () {
            _this.virtualScroll.scrollToIndex(0);
        }, 250);
    };
    ContributeTranslateComponent.prototype.onDeleteItem = function (translation) {
        if (translation && !translation.id) {
            var index = this.listSentencesSpokenLanguage.indexOf(translation);
            if (index !== -1) {
                this.listSentencesSpokenLanguage.splice(index, 1);
            }
        }
        this.listSentencesSpokenLanguage = this.listSentencesSpokenLanguage.slice();
    };
    ContributeTranslateComponent.prototype.removeLanguage = function (_a) {
        var languagesList = _a[0], languageId = _a[1];
        if (languagesList) {
            return languagesList.filter(function (x) { return x.id !== languageId; });
        }
        return [];
    };
    ContributeTranslateComponent.prototype.filterListSentencesSpokenLanguage = function () {
        if (!this.listSentencesSpokenLanguage) {
            return [];
        }
        var l1Search = this.searchSentenceL1Control.value.trim();
        var l2Search = this.searchSentenceL2Control.value.trim();
        return this.listSentencesSpokenLanguage.filter(function (x) { return (l1Search.length === 0 || !x.id || x.text.includes(l1Search)) &&
            (l2Search.length === 0 || (x.lastSentenceTranslation &&
                (!x.lastSentenceTranslation.id || x.lastSentenceTranslation.text.includes(l2Search)))); });
    };
    ContributeTranslateComponent.prototype.listenEventEmitters = function () {
        var _this = this;
        this.contributeService.projectControl.valueChanges
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (value) {
            if (value) {
                var project = _this.contributeService.projectsList.find(function (x) { return x.id === value; });
                _this.language1Control.setValue(project.language1Id, { emitEvent: false });
                _this.language2Control.setValue(project.language2Id, { emitEvent: false });
                _this.language1Control.disable({ emitEvent: false });
                _this.language2Control.disable({ emitEvent: false });
                _this.onCheckLevelProfeciencyAndLoadTranslations();
            }
            else {
                _this.language1Control.setValue(null, { emitEvent: false });
                _this.language2Control.setValue(null, { emitEvent: false });
                _this.language1Control.enable({ emitEvent: false });
                _this.language2Control.enable({ emitEvent: false });
                _this.onCheckLevelProfeciencyAndLoadTranslations();
            }
        });
        (0, rxjs_1.merge)(this.language1Control.valueChanges, this.language2Control.valueChanges).pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (value) {
            _this.onCheckLevelProfeciencyAndLoadTranslations();
        });
        this.contributeService.fileImportControl.valueChanges
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (value) {
            if (value) {
                if (value.match('\.txt$')) {
                    var reader_1 = new FileReader();
                    reader_1.onload = function () {
                        _this.sentencesToImport = reader_1.result.toString().split('\n')
                            .filter(function (x) { return x.trim().length > 0; })
                            .map(function (x) {
                            var newSentence = new sentenceViewModel_1.SentenceViewModel();
                            newSentence.languageId = _this.language1Control.value;
                            newSentence.projectId = _this.contributeService.projectControl.value;
                            newSentence.text = x.trim();
                            newSentence.userCreationId = _this.credencialsService.getCredentials.id;
                            newSentence.userChangeId = _this.credencialsService.getCredentials.id;
                            return newSentence;
                        });
                        _this.popupFileImportVisible = true;
                    };
                    reader_1.onerror = function () {
                        console.log(reader_1.error);
                        _this.toastr.error('Error in reading file');
                    };
                    reader_1.readAsText(_this.fileInput.nativeElement.files[0], 'ASCII');
                }
                else {
                    _this.toastr.error('File is not valid');
                    _this.contributeService.fileImportControl.setValue(null, { emitEvent: false });
                }
            }
        });
    };
    __decorate([
        (0, core_1.ViewChild)(ngx_virtual_scroller_1.VirtualScrollerComponent)
    ], ContributeTranslateComponent.prototype, "virtualScroll");
    __decorate([
        (0, core_1.ViewChild)('fileInput')
    ], ContributeTranslateComponent.prototype, "fileInput");
    ContributeTranslateComponent = __decorate([
        (0, until_destroy_1.UntilDestroy)(),
        (0, core_1.Component)({
            selector: 'app-contribute-translate',
            templateUrl: './contribute-translate.component.html',
            styleUrls: ['./contribute-translate.component.scss']
        })
    ], ContributeTranslateComponent);
    return ContributeTranslateComponent;
}(baseComponent_1.BaseComponent));
exports.ContributeTranslateComponent = ContributeTranslateComponent;
