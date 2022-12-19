"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContributeService = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var sentenceViewModel_1 = require("../viewmodels/sentenceViewModel");
var userProjectViewModel_1 = require("../viewmodels/userProjectViewModel");
var ContributeService = /** @class */ (function () {
    function ContributeService(httpService) {
        this.httpService = httpService;
        this.url = 'Contribute/';
        this.languagesList = [];
        this.projectsList = [];
        this.loadDadosCompleted = false;
        this.sentenceSelect = null;
        this.projectControl = new forms_1.FormControl({ value: null, disabled: true });
        this.fileImportControl = new forms_1.FormControl(null);
        this.languagesL2Control = new forms_1.FormControl([]);
    }
    ContributeService.prototype.loadDados = function () {
        var _this = this;
        if (this.loadDadosCompleted) {
            return (0, rxjs_1.of)({
                projects: this.projectsList,
                languages: this.languagesList
            });
        }
        return this.httpService.get(this.url + 'loadDados')
            .pipe((0, operators_1.map)(function (response) {
            if (response) {
                _this.projectsList = response.projects || [];
                _this.languagesList = response.languages || [];
            }
            _this.loadDadosCompleted = true;
            return response;
        }));
    };
    ContributeService.prototype.getSentencesByLanguagueId = function (languagueId) {
        return this.httpService.get(this.url + 'sentences/' + languagueId);
    };
    ContributeService.prototype.insertTranslation = function (translation) {
        var body = JSON.stringify(translation);
        return this.httpService.post(this.url + 'translation', body);
    };
    ContributeService.prototype.updateTranslation = function (translation) {
        var body = JSON.stringify(translation);
        return this.httpService.put(this.url + 'translation', body);
    };
    ContributeService.prototype.deleteTranslation = function (translationId, sentenceId) {
        return this.httpService["delete"](this.url + 'translation/' + translationId + '/' + sentenceId);
    };
    ContributeService.prototype.insertProficiencyLanguage = function (profeciencyLanguage) {
        var body = JSON.stringify(profeciencyLanguage);
        return this.httpService.post(this.url + 'proficiencyLanguage', body);
    };
    ContributeService.prototype.insertTranslationLike = function (translationLike) {
        var body = JSON.stringify(translationLike);
        return this.httpService.post(this.url + 'translationlike', body);
    };
    ContributeService.prototype.insertSentences = function (sentences) {
        var body = JSON.stringify(sentences);
        return this.httpService.post(this.url + 'sentences', body)
            .pipe((0, operators_1.map)(function (response) {
            return response.map(function (x) { return new sentenceViewModel_1.SentenceViewModel(x); });
        }));
    };
    ContributeService.prototype.insertUserProject = function (userProject) {
        var body = JSON.stringify(userProject);
        return this.httpService.post(this.url + 'projectuser', body)
            .pipe((0, operators_1.map)(function (response) {
            return new userProjectViewModel_1.UserProjectViewModel(response);
        }));
    };
    ContributeService.prototype.updateTranslationLike = function (translationLike) {
        var body = JSON.stringify(translationLike);
        return this.httpService.put(this.url + 'translationlike', body);
    };
    ContributeService.prototype.getSentecesWithLastTranslation = function (l1, l2, projectId) {
        return this.httpService.get(this.url + 'translations/' + l1 + '/' + l2 + '/' + (projectId ? projectId : 0));
    };
    ContributeService.prototype.getTranslationsFromLanguageAndProject = function (l1, projectId) {
        return this.httpService.get(this.url + 'translations/' + l1 + '/' + (projectId ? projectId : 0));
    };
    ContributeService.prototype.getTranslationsFromLanguage1ToLanguage2AndProject = function (l1, l2, projectId) {
        return this.httpService
            .get(this.url + 'translationstoexport/' + l1 + '/' + l2 + '/' + (projectId ? projectId : 0));
    };
    ContributeService.prototype.getUserProjects = function (userId) {
        return this.httpService.get(this.url + 'userprojects/' + userId)
            .pipe((0, operators_1.map)(function (response) {
            return response.map(function (x) { return new userProjectViewModel_1.UserProjectViewModel(x); });
        }));
    };
    ContributeService = __decorate([
        (0, core_1.Injectable)()
    ], ContributeService);
    return ContributeService;
}());
exports.ContributeService = ContributeService;
