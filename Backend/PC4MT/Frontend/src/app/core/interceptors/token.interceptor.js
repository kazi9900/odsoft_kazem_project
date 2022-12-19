"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TokenInterceptor = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
/**
 * Adds a default error handler to all requests.
 */
var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(credentialsService) {
        this.credentialsService = credentialsService;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var headers = new http_1.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        if (this.credentialsService.getCredentials != null) {
            headers = this.getAuthenticationHeader(headers);
        }
        request = request.clone({ headers: headers });
        return next.handle(request);
    };
    TokenInterceptor.prototype.getAuthenticationHeader = function (headers) {
        var authToken = this.credentialsService.getCredentials.token;
        if (!authToken) {
            return headers;
        }
        var authHeader = "Bearer ".concat(authToken);
        return headers.append('Authorization', authHeader);
    };
    TokenInterceptor = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], TokenInterceptor);
    return TokenInterceptor;
}());
exports.TokenInterceptor = TokenInterceptor;
