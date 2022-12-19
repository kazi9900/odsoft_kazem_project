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
exports.ContributeSearchListaItemComponent = void 0;
var core_1 = require("@angular/core");
var until_destroy_1 = require("@ngneat/until-destroy");
var baseComponent_1 = require("../../shared/baseComponent");
var ContributeSearchListaItemComponent = /** @class */ (function (_super) {
    __extends(ContributeSearchListaItemComponent, _super);
    function ContributeSearchListaItemComponent(contributeService, credencialsService, notificationService) {
        var _this = _super.call(this) || this;
        _this.contributeService = contributeService;
        _this.credencialsService = credencialsService;
        _this.notificationService = notificationService;
        _this.searchSentenceL2 = '';
        return _this;
    }
    ContributeSearchListaItemComponent.prototype.ngOnInit = function () {
    };
    ContributeSearchListaItemComponent.prototype.hasLikeCurrentuser = function (_a) {
        var _this = this;
        var translatioLikes = _a[0], value = _a[1];
        if (!this.credencialsService.getCredentials) {
            return false;
        }
        return translatioLikes.some(function (x) { return x.like === value && x.userId === _this.credencialsService.getCredentials.id; });
    };
    ContributeSearchListaItemComponent.prototype.likeTranslation = function (translation) {
        var _this = this;
        if (this.credencialsService.getCredentials) {
            var currentLikeUser = translation.translationLikes.find(function (x) { return x.userId === _this.credencialsService.getCredentials.id; });
            if (!currentLikeUser) {
                var newTranslationLike = {
                    userId: this.credencialsService.getCredentials.id,
                    translationId: translation.id,
                    like: true
                };
                this.contributeService.insertTranslationLike(newTranslationLike)
                    .pipe((0, until_destroy_1.untilDestroyed)(this))
                    .subscribe(function (response) {
                    translation.translationLikes.push(response);
                    translation.translationLikes = translation.translationLikes.slice();
                    _this.notificationService.sendTranslationLikeAdd(response);
                });
            }
            else {
                currentLikeUser.like = currentLikeUser.like ? null : true;
                this.contributeService.updateTranslationLike(currentLikeUser)
                    .pipe((0, until_destroy_1.untilDestroyed)(this))
                    .subscribe(function (response) {
                    translation.translationLikes = translation.translationLikes.slice();
                    _this.notificationService.sendTranslationLikeUpdate(response);
                });
            }
        }
    };
    ContributeSearchListaItemComponent.prototype.dislikeTranslation = function (translation) {
        var _this = this;
        if (this.credencialsService.getCredentials) {
            var currentLikeUser = translation.translationLikes.find(function (x) { return x.userId === _this.credencialsService.getCredentials.id; });
            if (!currentLikeUser) {
                var newTranslationLike = {
                    userId: this.credencialsService.getCredentials.id,
                    translationId: translation.id,
                    like: false
                };
                this.contributeService.insertTranslationLike(newTranslationLike)
                    .pipe((0, until_destroy_1.untilDestroyed)(this))
                    .subscribe(function (response) {
                    translation.translationLikes.push(response);
                    translation.translationLikes = translation.translationLikes.slice();
                    _this.notificationService.sendTranslationLikeAdd(response);
                });
            }
            else {
                currentLikeUser.like = currentLikeUser.like === false ? null : false;
                this.contributeService.updateTranslationLike(currentLikeUser)
                    .pipe((0, until_destroy_1.untilDestroyed)(this))
                    .subscribe(function (response) {
                    translation.translationLikes = translation.translationLikes.slice();
                    _this.notificationService.sendTranslationLikeUpdate(response);
                });
            }
        }
    };
    ContributeSearchListaItemComponent.prototype.filterTranslations = function (_a) {
        var _this = this;
        var translations = _a[0], languagesL2 = _a[1], searchSentenceL2 = _a[2];
        if (!translations) {
            return [];
        }
        if (languagesL2.length === 0 && searchSentenceL2.trim().length === 0) {
            return translations;
        }
        return translations
            .filter(function (x) { return (languagesL2.length === 0 || _this.contributeService.languagesL2Control.value.includes(x.sentenceL2.languageId)) &&
            (searchSentenceL2.trim().length === 0 || x.sentenceL2.text.includes(searchSentenceL2.trim())); });
    };
    __decorate([
        (0, core_1.Input)()
    ], ContributeSearchListaItemComponent.prototype, "item");
    __decorate([
        (0, core_1.Input)()
    ], ContributeSearchListaItemComponent.prototype, "searchSentenceL2");
    ContributeSearchListaItemComponent = __decorate([
        (0, until_destroy_1.UntilDestroy)(),
        (0, core_1.Component)({
            selector: 'app-contribute-search-lista-item',
            templateUrl: './contribute-search-lista-item.component.html',
            styleUrls: ['./contribute-search-lista-item.component.scss']
        })
    ], ContributeSearchListaItemComponent);
    return ContributeSearchListaItemComponent;
}(baseComponent_1.BaseComponent));
exports.ContributeSearchListaItemComponent = ContributeSearchListaItemComponent;
