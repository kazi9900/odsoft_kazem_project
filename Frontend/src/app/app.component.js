"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var until_destroy_1 = require("@ngneat/until-destroy");
var rxjs_1 = require("rxjs");
var AppComponent = /** @class */ (function () {
    function AppComponent(contributeService, dataService, toastr, spinner, router, translateService) {
        this.contributeService = contributeService;
        this.dataService = dataService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.router = router;
        this.translateService = translateService;
        this.translateService.use('pt');
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['']);
        this.loadDadosGeraisAndCurrentUser();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.spinner.hide('general');
    };
    AppComponent.prototype.loadDadosGeraisAndCurrentUser = function () {
        var _this = this;
        this.spinner.show('general');
        (0, rxjs_1.forkJoin)([
            this.contributeService.loadDados(),
            this.dataService.loadCurrentUser()
        ])
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function () {
            _this.spinner.hide('general');
        }, function () {
            _this.spinner.hide('general');
            _this.toastr.error(_this.translateService.instant('AppComponent.Message.ErrorLoadingGeneralData'));
        });
    };
    AppComponent = __decorate([
        (0, until_destroy_1.UntilDestroy)(),
        (0, core_1.Component)({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
