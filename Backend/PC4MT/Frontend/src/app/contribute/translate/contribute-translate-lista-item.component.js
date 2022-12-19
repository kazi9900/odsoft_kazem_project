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
exports.ContributeTranslateListaItemComponent = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var until_destroy_1 = require("@ngneat/until-destroy");
var baseComponent_1 = require("../../shared/baseComponent");
var modeEnum_1 = require("../../shared/helpers/modeEnum");
var sentenceViewModel_1 = require("../viewmodels/sentenceViewModel");
var translationViewModel_1 = require("../viewmodels/translationViewModel");
var uuid_1 = require("uuid");
var ContributeTranslateListaItemComponent = /** @class */ (function (_super) {
    __extends(ContributeTranslateListaItemComponent, _super);
    function ContributeTranslateListaItemComponent(contributeService, credentialsService, formBuilder, ref, toastr, spinner, translateService) {
        var _this = _super.call(this) || this;
        _this.contributeService = contributeService;
        _this.credentialsService = credentialsService;
        _this.formBuilder = formBuilder;
        _this.ref = ref;
        _this.toastr = toastr;
        _this.spinner = spinner;
        _this.translateService = translateService;
        _this.deleteItem = new core_1.EventEmitter();
        _this.isEditor = false;
        return _this;
    }
    ContributeTranslateListaItemComponent.prototype.ngOnInit = function () {
        this.isEditor = this.credentialsService.isEditor();
        this.id = (0, uuid_1.v4)();
        if (!this.item.text) {
            this.mode = modeEnum_1.ModeEnum.CREATE;
            this.form = this.formBuilder.group({
                textL1: ['', [forms_1.Validators.required]],
                textL2: ['', this.isEditor ? [] : [forms_1.Validators.required]]
            });
        }
    };
    ContributeTranslateListaItemComponent.prototype.ngOnDestroy = function () {
        this.spinner.hide(this.id);
    };
    ContributeTranslateListaItemComponent.prototype.onClickDeleteTranslation = function () {
        var _this = this;
        this.spinner.show(this.id);
        this.contributeService.deleteTranslation(this.item.lastSentenceTranslationId, this.item.id)
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (response) {
            _this.item.copyFrom(new sentenceViewModel_1.SentenceViewModel(response));
            _this.ref.detectChanges();
            _this.spinner.hide(_this.id);
            _this.toastr.success(_this.translateService.instant('ContributeComponent.Message.TranslationSuccessfullyDeleted'));
        }, function () {
            _this.spinner.hide(_this.id);
            _this.toastr.success(_this.translateService.instant('ContributeComponent.Message.ErrorDeletingTranslation'));
        });
    };
    ContributeTranslateListaItemComponent.prototype.onClickNewTranslation = function () {
        this.contributeService.sentenceSelect = this.item;
        this.searchL1.disable({ emitEvent: false });
        this.searchL2.disable({ emitEvent: false });
        this.contributeService.projectControl.disable({ emitEvent: false });
        this.mode = modeEnum_1.ModeEnum.ADD;
        this.initializeForm();
        this.ref.detectChanges();
    };
    ContributeTranslateListaItemComponent.prototype.onClickEditTranslation = function () {
        this.contributeService.sentenceSelect = this.item;
        this.searchL1.disable({ emitEvent: false });
        this.searchL2.disable({ emitEvent: false });
        this.contributeService.projectControl.disable({ emitEvent: false });
        this.mode = modeEnum_1.ModeEnum.EDIT;
        this.initializeForm();
        this.ref.detectChanges();
    };
    ContributeTranslateListaItemComponent.prototype.onCancel = function () {
        this.form = null;
        this.contributeService.sentenceSelect = null;
        this.searchL1.enable({ emitEvent: false });
        this.searchL2.enable({ emitEvent: false });
        this.contributeService.projectControl.enable({ emitEvent: false });
        if (this.mode === modeEnum_1.ModeEnum.CREATE) {
            this.deleteItem.emit(this.item);
        }
        this.mode = null;
        this.ref.detectChanges();
    };
    ContributeTranslateListaItemComponent.prototype.onSave = function () {
        if (this.form.valid) {
            switch (this.mode) {
                case modeEnum_1.ModeEnum.ADD:
                    this.insertTranslation();
                    break;
                case modeEnum_1.ModeEnum.EDIT:
                    this.updateTranslation();
                    break;
                case modeEnum_1.ModeEnum.CREATE:
                    if (this.form && this.form.get('textL2').value && this.form.get('textL2').value.trim().length > 0) {
                        this.createTranslation();
                    }
                    else {
                        this.createSentence();
                    }
                    break;
            }
        }
        else {
            this.toastr.warning(this.translateService.instant('ContributeComponent.Message.InvalidText'));
        }
    };
    ContributeTranslateListaItemComponent.prototype.updateTranslation = function () {
        var _this = this;
        var translation = new translationViewModel_1.TranslationViewModel();
        translation.id = this.item.lastSentenceTranslationId;
        translation.sentenceSpoken = new sentenceViewModel_1.SentenceViewModel(this.item);
        translation.sentenceSpoken.lastSentenceTranslation = null;
        translation.sentenceSpokenId = this.item.id;
        translation.sentenceSign = new sentenceViewModel_1.SentenceViewModel(this.item.lastSentenceTranslation);
        translation.sentenceSignId = this.item.lastSentenceTranslation.id;
        translation.sentenceSign.text = this.form.controls.text.value;
        if (this.credentialsService.isAuthenticated()) {
            translation.userChangeId = this.credentialsService.getCredentials.id;
            translation.sentenceSign.userChangeId = this.credentialsService.getCredentials.id;
        }
        this.spinner.show(this.id);
        this.contributeService.updateTranslation(translation)
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (response) {
            _this.item.copyFrom(new sentenceViewModel_1.SentenceViewModel(response));
            _this.form = null;
            _this.contributeService.sentenceSelect = null;
            _this.mode = null;
            _this.searchL1.enable({ emitEvent: false });
            _this.searchL2.enable({ emitEvent: false });
            _this.contributeService.projectControl.enable({ emitEvent: false });
            _this.spinner.hide(_this.id);
            _this.toastr.success(_this.translateService.instant('ContributeComponent.Message.TranslationUpdatedSuccessfully'));
        }, function () {
            _this.spinner.hide(_this.id);
            _this.toastr.error(_this.translateService.instant('ContributeComponent.Message.ErrorUpdatingTranslation'));
        });
    };
    ContributeTranslateListaItemComponent.prototype.insertTranslation = function () {
        var _this = this;
        var newSentenceL2 = new sentenceViewModel_1.SentenceViewModel();
        newSentenceL2.languageId = this.language2;
        newSentenceL2.text = this.form.controls.text.value;
        newSentenceL2.projectId = this.contributeService.projectControl.value;
        var newTranslation = new translationViewModel_1.TranslationViewModel();
        newTranslation.sentenceSpoken = this.item;
        newTranslation.sentenceSpokenId = this.item.id;
        newTranslation.sentenceSign = newSentenceL2;
        if (this.credentialsService.isAuthenticated()) {
            newSentenceL2.userCreationId = this.credentialsService.getCredentials.id;
            newSentenceL2.userChangeId = this.credentialsService.getCredentials.id;
            newTranslation.userCreationId = this.credentialsService.getCredentials.id;
            newTranslation.userChangeId = this.credentialsService.getCredentials.id;
        }
        this.spinner.show(this.id);
        this.contributeService.insertTranslation(newTranslation)
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (response) {
            _this.item.copyFrom(new sentenceViewModel_1.SentenceViewModel(response));
            _this.form = null;
            _this.contributeService.sentenceSelect = null;
            _this.mode = null;
            _this.searchL1.enable({ emitEvent: false });
            _this.searchL2.enable({ emitEvent: false });
            _this.contributeService.projectControl.enable({ emitEvent: false });
            _this.spinner.hide(_this.id);
            _this.toastr.success(_this.translateService.instant('ContributeComponent.Message.TranslationInsertedSuccessfully'));
        }, function () {
            _this.spinner.hide(_this.id);
            _this.toastr.error(_this.translateService.instant('ContributeComponent.Message.ErrorInsertingTranslation'));
        });
    };
    ContributeTranslateListaItemComponent.prototype.createTranslation = function () {
        var _this = this;
        if (this.form && this.form.valid) {
            var newSentenceL1 = new sentenceViewModel_1.SentenceViewModel();
            newSentenceL1.id = null;
            newSentenceL1.languageId = this.item.languageId;
            newSentenceL1.text = this.form.get('textL1').value;
            newSentenceL1.projectId = this.contributeService.projectControl.value;
            var newSentenceL2 = new sentenceViewModel_1.SentenceViewModel();
            newSentenceL2.id = null;
            newSentenceL2.languageId = this.item.lastSentenceTranslation.languageId;
            newSentenceL2.text = this.form.get('textL2').value;
            newSentenceL2.projectId = this.contributeService.projectControl.value;
            var newTranslation = new translationViewModel_1.TranslationViewModel();
            newTranslation.sentenceSpoken = newSentenceL1;
            newTranslation.sentenceSign = newSentenceL2;
            if (this.credentialsService.isAuthenticated()) {
                newSentenceL1.userCreationId = this.credentialsService.getCredentials.id;
                newSentenceL1.userChangeId = this.credentialsService.getCredentials.id;
                newSentenceL2.userCreationId = this.credentialsService.getCredentials.id;
                newSentenceL2.userChangeId = this.credentialsService.getCredentials.id;
                newTranslation.userCreationId = this.credentialsService.getCredentials.id;
                newTranslation.userChangeId = this.credentialsService.getCredentials.id;
            }
            this.spinner.show(this.id);
            this.contributeService.insertTranslation(newTranslation)
                .pipe((0, until_destroy_1.untilDestroyed)(this))
                .subscribe(function (response) {
                _this.item.copyFrom(new sentenceViewModel_1.SentenceViewModel(response));
                _this.form = null;
                _this.contributeService.sentenceSelect = null;
                _this.mode = null;
                _this.searchL1.enable({ emitEvent: false });
                _this.searchL2.enable({ emitEvent: false });
                _this.contributeService.projectControl.enable({ emitEvent: false });
                _this.deleteItem.emit(null);
                _this.spinner.hide(_this.id);
                _this.toastr.success(_this.translateService.instant('ContributeComponent.Message.TranslationInsertedSuccessfully'));
            }, function () {
                _this.spinner.hide(_this.id);
                _this.toastr.error(_this.translateService.instant('ContributeComponent.Message.ErrorInsertingTranslation'));
            });
        }
    };
    ContributeTranslateListaItemComponent.prototype.createSentence = function () {
        var _this = this;
        if (this.form && this.form.valid) {
            var newSentenceL1 = new sentenceViewModel_1.SentenceViewModel();
            newSentenceL1.id = null;
            newSentenceL1.languageId = this.item.languageId;
            newSentenceL1.text = this.form.get('textL1').value;
            newSentenceL1.projectId = this.contributeService.projectControl.value;
            if (this.credentialsService.isAuthenticated()) {
                newSentenceL1.userCreationId = this.credentialsService.getCredentials.id;
                newSentenceL1.userChangeId = this.credentialsService.getCredentials.id;
            }
            this.spinner.show(this.id);
            this.contributeService.insertSentences([newSentenceL1])
                .pipe((0, until_destroy_1.untilDestroyed)(this))
                .subscribe(function (response) {
                _this.item.copyFrom(new sentenceViewModel_1.SentenceViewModel(response[0]));
                _this.form = null;
                _this.contributeService.sentenceSelect = null;
                _this.mode = null;
                _this.searchL1.enable({ emitEvent: false });
                _this.searchL2.enable({ emitEvent: false });
                _this.contributeService.projectControl.enable({ emitEvent: false });
                _this.deleteItem.emit(null);
                _this.spinner.hide(_this.id);
                _this.toastr.success(_this.translateService.instant('ContributeComponent.Message.SentenceInsertedSuccessfully'));
            }, function () {
                _this.spinner.hide(_this.id);
                _this.toastr.error(_this.translateService.instant('ContributeComponent.Message.ErrorInsertingSentence'));
            });
        }
    };
    ContributeTranslateListaItemComponent.prototype.initializeForm = function () {
        this.form = this.formBuilder.group({
            text: [this.mode === modeEnum_1.ModeEnum.ADD ? '' : this.item.lastSentenceTranslation.text, [forms_1.Validators.required]]
        });
    };
    __decorate([
        (0, core_2.Input)()
    ], ContributeTranslateListaItemComponent.prototype, "item");
    __decorate([
        (0, core_2.Input)()
    ], ContributeTranslateListaItemComponent.prototype, "language1");
    __decorate([
        (0, core_2.Input)()
    ], ContributeTranslateListaItemComponent.prototype, "language2");
    __decorate([
        (0, core_2.Input)()
    ], ContributeTranslateListaItemComponent.prototype, "searchL1");
    __decorate([
        (0, core_2.Input)()
    ], ContributeTranslateListaItemComponent.prototype, "searchL2");
    __decorate([
        (0, core_1.Output)()
    ], ContributeTranslateListaItemComponent.prototype, "deleteItem");
    ContributeTranslateListaItemComponent = __decorate([
        (0, until_destroy_1.UntilDestroy)(),
        (0, core_2.Component)({
            selector: 'app-contribute-translate-lista-item',
            templateUrl: './contribute-translate-lista-item.component.html',
            styleUrls: ['./contribute-translate-lista-item.component.scss']
        })
    ], ContributeTranslateListaItemComponent);
    return ContributeTranslateListaItemComponent;
}(baseComponent_1.BaseComponent));
exports.ContributeTranslateListaItemComponent = ContributeTranslateListaItemComponent;
