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
exports.ContributeComponent = void 0;
var core_1 = require("@angular/core");
var until_destroy_1 = require("@ngneat/until-destroy");
var rxjs_1 = require("rxjs");
var baseComponent_1 = require("../shared/baseComponent");
var userViewModel_1 = require("../signin-signup/signin-form/viewmodels/userViewModel");
var ContributeComponent = /** @class */ (function (_super) {
    __extends(ContributeComponent, _super);
    function ContributeComponent(router, contributeService, toastr, credentialsService, signUpService, route) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.contributeService = contributeService;
        _this.toastr = toastr;
        _this.credentialsService = credentialsService;
        _this.signUpService = signUpService;
        _this.route = route;
        return _this;
    }
    ContributeComponent.prototype.ngOnInit = function () {
        this.isAuthenticate = this.credentialsService.isAuthenticated();
        this.loadDados();
    };
    ContributeComponent.prototype.onOpenPage = function (opt) {
        switch (opt) {
            case 'translate':
                this.router.navigate(['translate'], { relativeTo: this.route });
                break;
            case 'projects':
                this.router.navigate(['projects'], { relativeTo: this.route });
                break;
            case 'search':
                this.router.navigate(['search'], { relativeTo: this.route });
                break;
            case 'download':
                this.router.navigate(['download'], { relativeTo: this.route });
                break;
            default:
                break;
        }
    };
    ContributeComponent.prototype.filterProjects = function (listProjects) {
        if (!listProjects) {
            return [];
        }
        var currentUserProjectsId = (this.credentialsService.currentUser && this.credentialsService.currentUser.userProjects) ?
            this.credentialsService.currentUser.userProjects.filter(function (x) { return x.isAutorized; }).map(function (x) { return x.projectId; }) : [];
        return listProjects.filter(function (x) { return currentUserProjectsId.includes(x.id); });
    };
    ContributeComponent.prototype.loadDados = function () {
        var _this = this;
        this.incrementIsBusy();
        (0, rxjs_1.forkJoin)([
            this.contributeService.loadDados(),
            this.isAuthenticate ? this.signUpService.emailExists(this.credentialsService.getCredentials.email) : (0, rxjs_1.of)(null)
        ])
            .pipe((0, until_destroy_1.untilDestroyed)(this))
            .subscribe(function (_a) {
            var response = _a[0], user = _a[1];
            if (response) {
                _this.contributeService.projectsList = response.projects;
                _this.contributeService.languagesList = response.languages;
                _this.contributeService.loadDadosCompleted = true;
                _this.contributeService.projectControl.enable({ emitEvent: false });
            }
            _this.credentialsService.currentUser = user ? new userViewModel_1.UserViewModel(user) : null;
            _this.decrementIsBusy();
        }, function () {
            _this.toastr.error('Erro ao carregar dados');
            _this.decrementIsBusy();
        });
    };
    ContributeComponent = __decorate([
        (0, until_destroy_1.UntilDestroy)(),
        (0, core_1.Component)({
            selector: 'app-contribute',
            templateUrl: './contribute.component.html',
            styleUrls: ['./contribute.component.scss']
        })
    ], ContributeComponent);
    return ContributeComponent;
}(baseComponent_1.BaseComponent));
exports.ContributeComponent = ContributeComponent;
