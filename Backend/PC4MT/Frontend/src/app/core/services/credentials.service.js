"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CredentialsService = void 0;
var core_1 = require("@angular/core");
var roleEnum_1 = require("../../shared/helpers/roleEnum");
var credentialsKey = 'credentials';
/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
var CredentialsService = /** @class */ (function () {
    function CredentialsService() {
        this.credentials = null;
        this.currentUser = null;
        var savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this.credentials = JSON.parse(savedCredentials);
        }
    }
    /**
     * Checks is the user is authenticated.
     * @return True if the user is authenticated.
     */
    CredentialsService.prototype.isAuthenticated = function () {
        return !!this.getCredentials;
    };
    CredentialsService.prototype.isRootOrAdmin = function () {
        return this.getCredentials && this.getCredentials.roleId &&
            (this.getCredentials.roleId === roleEnum_1.RoleEnum.Root || this.getCredentials.roleId === roleEnum_1.RoleEnum.Admin);
    };
    CredentialsService.prototype.isEditor = function () {
        return this.getCredentials && this.getCredentials.roleId && (this.getCredentials.roleId === roleEnum_1.RoleEnum.Root ||
            this.getCredentials.roleId === roleEnum_1.RoleEnum.Admin || this.getCredentials.roleId === roleEnum_1.RoleEnum.Editor);
    };
    Object.defineProperty(CredentialsService.prototype, "getCredentials", {
        /**
         * Gets the user credentials.
         * @return The user credentials or null if the user is not authenticated.
         */
        get: function () {
            return this.credentials;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    CredentialsService.prototype.setCredentials = function (credentials, remember) {
        this.credentials = credentials || null;
        if (credentials) {
            var storage = remember ? localStorage : sessionStorage;
            storage.setItem(credentialsKey, JSON.stringify(credentials));
        }
        else {
            sessionStorage.removeItem(credentialsKey);
            localStorage.removeItem(credentialsKey);
            this.currentUser = null;
        }
    };
    CredentialsService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], CredentialsService);
    return CredentialsService;
}());
exports.CredentialsService = CredentialsService;
