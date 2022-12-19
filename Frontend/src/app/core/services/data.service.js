"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var userViewModel_1 = require("../../signin-signup/signin-form/viewmodels/userViewModel");
var DataService = /** @class */ (function () {
    function DataService(credencialsService, httpService) {
        this.credencialsService = credencialsService;
        this.httpService = httpService;
    }
    DataService.prototype.loadCurrentUser = function () {
        var _this = this;
        if (this.credencialsService.isAuthenticated()) {
            var body = JSON.stringify(this.credencialsService.getCredentials.email);
            return this.httpService.post('User/email/', body)
                .pipe((0, operators_1.map)(function (response) {
                _this.credencialsService.currentUser = response ? new userViewModel_1.UserViewModel(response) : null;
                return _this.credencialsService.currentUser;
            }));
        }
        else {
            return (0, rxjs_1.of)(null);
        }
    };
    DataService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
