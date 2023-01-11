"use strict";
exports.__esModule = true;
exports.TranslationViewModel = void 0;
var sentenceViewModel_1 = require("./sentenceViewModel");
var TranslationViewModel = /** @class */ (function () {
    function TranslationViewModel(registo) {
        this.copyFrom(registo);
    }
    TranslationViewModel.prototype.copyFrom = function (registo) {
        if (registo) {
            this.sentenceSpokenId = registo.sentenceSpokenId;
            this.sentenceSignId = registo.sentenceSignId;
            this.userCreationId = registo.userCreationId;
            this.dateCreation = registo.dateCreation;
            this.userChangeId = registo.userChangeId;
            this.dateChange = registo.dateChange;
            if (registo.sentenceSpoken) {
                this.sentenceSpoken = new sentenceViewModel_1.SentenceViewModel(registo.sentenceSpoken);
            }
            if (registo.sentenceSign) {
                this.sentenceSign = new sentenceViewModel_1.SentenceViewModel(registo.sentenceSign);
            }
        }
    };
    return TranslationViewModel;
}());
exports.TranslationViewModel = TranslationViewModel;
