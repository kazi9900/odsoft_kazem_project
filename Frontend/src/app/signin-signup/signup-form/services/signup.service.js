"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignUpService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var userViewModel_1 = require("../../signin-form/viewmodels/userViewModel");
var SignUpService = /** @class */ (function () {
    function SignUpService(httpService) {
        this.httpService = httpService;
        this.url = 'User/';
    }
    SignUpService.prototype.changePassword = function (changePassword) {
        var body = JSON.stringify(changePassword);
        return this.httpService.put(this.url + 'changePassword/', body);
    };
    SignUpService.prototype.resetPassword = function (resetPassword) {
        var body = JSON.stringify(resetPassword);
        return this.httpService.post(this.url + 'resetpassword/', body);
    };
    SignUpService.prototype.checkCodeResetPassword = function (resetPassword) {
        var body = JSON.stringify(resetPassword);
        return this.httpService.post(this.url + 'checkcoderesetpassword/', body);
    };
    SignUpService.prototype.sendCodeResetPassword = function (resetPassword) {
        var body = JSON.stringify(resetPassword);
        return this.httpService.post(this.url + 'sendcoderesetpassword/', body);
    };
    SignUpService.prototype.emailExists = function (email) {
        var body = JSON.stringify(email);
        return this.httpService.post(this.url + 'email/', body);
    };
    SignUpService.prototype.registerUser = function (userRegister) {
        var body = JSON.stringify(userRegister);
        return this.httpService.post(this.url, body);
    };
    SignUpService.prototype.updateProfile = function (userProfile) {
        var body = JSON.stringify(userProfile);
        return this.httpService.put(this.url + 'profile/', body)
            .pipe((0, operators_1.map)(function (response) {
            return response ? new userViewModel_1.UserViewModel(response) : null;
        }));
    };
    SignUpService.prototype.existsSomeSentenceUserIdAndLanguageId = function (userId, languageId) {
        return this.httpService.get(this.url + 'existssomesentence/' + userId + '/' + languageId);
    };
    SignUpService = __decorate([
        (0, core_1.Injectable)()
    ], SignUpService);
    return SignUpService;
}());
exports.SignUpService = SignUpService;
