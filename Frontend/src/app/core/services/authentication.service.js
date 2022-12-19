"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthenticationService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(credentialsService, dataService, http) {
        this.credentialsService = credentialsService;
        this.dataService = dataService;
        this.http = http;
        this.url = 'User';
    }
    /**
     * Authenticates the user.
     * @param context The login parameters.
     * @return The user credentials.
     */
    AuthenticationService.prototype.login = function (context) {
        var _this = this;
        var body = JSON.stringify(context);
        return new rxjs_1.Observable(function (observer) {
            _this.http.post(_this.url + '/authenticate', body).subscribe(function (credentials) {
                _this.data = credentials;
                _this.credentialsService.setCredentials(_this.data);
                _this.dataService.loadCurrentUser()
                    .subscribe(function () {
                    observer.next(credentials);
                }, function () {
                    observer.next(credentials);
                });
            }, function (error) {
                observer.error(error);
            });
        });
    };
    AuthenticationService.prototype.changePassword = function (changePassword) {
        var body = JSON.stringify(changePassword);
        return this.http.put(this.url + '/changePassword', body);
    };
    /**
     * Logs out the user and clear credentials.
     * @return True if the user was logged out successfully.
     */
    AuthenticationService.prototype.logout = function () {
        // Customize credentials invalidation here
        this.credentialsService.setCredentials();
        return (0, rxjs_1.of)(true);
    };
    AuthenticationService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
