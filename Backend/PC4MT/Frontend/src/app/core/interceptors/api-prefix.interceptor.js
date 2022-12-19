"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiPrefixInterceptor = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
/**
 * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
 */
var ApiPrefixInterceptor = /** @class */ (function () {
    function ApiPrefixInterceptor() {
    }
    ApiPrefixInterceptor.prototype.intercept = function (request, next) {
        if (!/^(http|https):/i.test(request.url)) {
            request = request.clone({ url: environment_1.environment.serverUrl + request.url });
        }
        return next.handle(request);
    };
    ApiPrefixInterceptor = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], ApiPrefixInterceptor);
    return ApiPrefixInterceptor;
}());
exports.ApiPrefixInterceptor = ApiPrefixInterceptor;
