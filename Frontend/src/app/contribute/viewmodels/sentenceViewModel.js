"use strict";
exports.__esModule = true;
exports.SentenceViewModel = void 0;
var SentenceViewModel = /** @class */ (function () {
    function SentenceViewModel(registo) {
        this.copyFrom(registo);
    }
    SentenceViewModel.prototype.copyFrom = function (registo) {
        if (registo) {
            this.id = registo.id;
            this.text = registo.text;
            this.languageId = registo.languageId;
            this.projectId = registo.projectId;
            this.userCreationId = registo.userCreationId;
            this.dateCreation = registo.dateCreation;
            this.userChangeId = registo.userChangeId;
            this.dateChange = registo.dateChange;
            this.countTranslations = registo.countTranslations;
            this.lastSentenceTranslationId = registo.lastSentenceTranslationId;
            this.lastSentenceTranslation = registo.lastSentenceTranslation ? new SentenceViewModel(registo.lastSentenceTranslation) : null;
        }
    };
    return SentenceViewModel;
}());
exports.SentenceViewModel = SentenceViewModel;
