"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ErrorHandlerInterceptor = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var logger_service_1 = require("../services/logger.service");
var _env_1 = require("src/environments/.env");
var log = new logger_service_1.Logger('ErrorHandlerInterceptor');
/**
 * Adds a default error handler to all requests.
 */
var ErrorHandlerInterceptor = /** @class */ (function () {
    function ErrorHandlerInterceptor(route, router) {
        this.route = route;
        this.router = router;
    }
    ErrorHandlerInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe((0, operators_1.catchError)(function (error) { return _this.errorHandler(error); }));
    };
    // Customize the default error handler here if needed
    ErrorHandlerInterceptor.prototype.errorHandler = function (response) {
        if (!_env_1.env.production) {
            // Do something with the error
            log.error('Request error', response);
        }
        // redirect to login if token is expired
        if (response instanceof http_1.HttpErrorResponse) {
            if (response.status === 401) {
                this.router.navigate([this.route.snapshot.queryParams.redirect || '/login'], { replaceUrl: true });
            }
        }
        throw response;
    };
    ErrorHandlerInterceptor = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], ErrorHandlerInterceptor);
    return ErrorHandlerInterceptor;
}());
exports.ErrorHandlerInterceptor = ErrorHandlerInterceptor;
