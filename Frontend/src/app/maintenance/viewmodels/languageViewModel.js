"use strict";
exports.__esModule = true;
exports.LanguageViewModel = void 0;
var LanguageViewModel = /** @class */ (function () {
    function LanguageViewModel(registo) {
        this.copyFrom(registo);
    }
    LanguageViewModel.prototype.copyFrom = function (registo) {
        if (registo) {
            this.id = registo.id;
            this.name = registo.name;
            this.abbreviation = registo.abbreviation;
            this.type = registo.type;
        }
    };
    return LanguageViewModel;
}());
exports.LanguageViewModel = LanguageViewModel;
