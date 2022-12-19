"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavBarComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var until_destroy_1 = require("@ngneat/until-destroy");
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(authenticationService, router, credentialsService, translateService) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.router = router;
        this.credentialsService = credentialsService;
        this.translateService = translateService;
        this.currentLanguage = this.translateService.currentLang || 'en';
        this.currentLanguageControl = new forms_1.FormControl(this.currentLanguage);
        this.languages = [
            { id: 'en', descr: 'En' },
            { id: 'pt', descr: 'Pt' }
        ];
        this.translateService.onLangChange
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (langChangeEvent) {
            _this.currentLanguage = langChangeEvent.lang;
            _this.currentLanguageControl.setValue(_this.currentLanguage, { emitEvent: false });
        });
        this.currentLanguageControl.valueChanges
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (value) {
            _this.currentLanguage = value;
            _this.translateService.use(value);
        });
    }
    NavBarComponent.prototype.onOpenPage = function (opt) {
        switch (opt) {
            case 'home':
                this.router.navigate(['/'], { replaceUrl: true });
                break;
            case 'contribute':
                this.router.navigate(['/contribute/translate'], { replaceUrl: true });
                break;
            case 'signin-signup':
                this.router.navigate(['/signin-signup'], { replaceUrl: true });
                break;
            case 'profile':
                this.router.navigate(['/profile'], { replaceUrl: true });
                break;
            case 'maintenance':
                this.router.navigate(['/maintenance'], { replaceUrl: true });
                break;
            default:
                break;
        }
    };
    NavBarComponent.prototype.signOut = function () {
        var _this = this;
        this.authenticationService.logout()
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function () {
            _this.router.navigate(['/'], { replaceUrl: true });
        });
    };
    NavBarComponent = __decorate([
        (0, until_destroy_1.UntilDestroy)(),
        (0, core_1.Component)({
            selector: 'app-nav-bar',
            templateUrl: './nav-bar.component.html',
            styleUrls: ['./nav-bar.component.scss']
        })
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
