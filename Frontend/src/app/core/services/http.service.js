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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.HttpService = exports.HTTP_DYNAMIC_INTERCEPTORS = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var error_handler_interceptor_1 = require("../interceptors/error-handler.interceptor");
var cache_interceptor_1 = require("../interceptors/cache.interceptor");
var api_prefix_interceptor_1 = require("../interceptors/api-prefix.interceptor");
var token_interceptor_1 = require("../interceptors/token.interceptor");
// From @angular/common/http/src/interceptor: allows to chain interceptors
var HttpInterceptorHandler = /** @class */ (function () {
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    HttpInterceptorHandler.prototype.handle = function (request) {
        return this.interceptor.intercept(request, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * Allows to override default dynamic interceptors that can be disabled with the HttpService extension.
 * Except for very specific needs, you should better configure these interceptors directly in the constructor below
 * for better readability.
 *
 * For static interceptors that should always be enabled (like ApiPrefixInterceptor), use the standard
 * HTTP_INTERCEPTORS token.
 */
exports.HTTP_DYNAMIC_INTERCEPTORS = new core_1.InjectionToken('HTTP_DYNAMIC_INTERCEPTORS');
/**
 * Extends HttpClient with per request configuration using dynamic interceptors.
 */
var HttpService = /** @class */ (function (_super) {
    __extends(HttpService, _super);
    function HttpService(httpHandler, injector, interceptors) {
        if (interceptors === void 0) { interceptors = []; }
        var _this = _super.call(this, httpHandler) || this;
        _this.httpHandler = httpHandler;
        _this.injector = injector;
        _this.interceptors = interceptors;
        if (!_this.interceptors) {
            // Configure default interceptors that can be disabled here
            _this.interceptors = [
                _this.injector.get(api_prefix_interceptor_1.ApiPrefixInterceptor),
                _this.injector.get(error_handler_interceptor_1.ErrorHandlerInterceptor),
                _this.injector.get(token_interceptor_1.TokenInterceptor)
            ];
        }
        return _this;
    }
    HttpService_1 = HttpService;
    HttpService.prototype.cache = function (forceUpdate) {
        var cacheInterceptor = this.injector
            .get(cache_interceptor_1.CacheInterceptor)
            .configure({ update: forceUpdate });
        return this.addInterceptor(cacheInterceptor);
    };
    HttpService.prototype.skipErrorHandler = function () {
        return this.removeInterceptor(error_handler_interceptor_1.ErrorHandlerInterceptor);
    };
    HttpService.prototype.disableApiPrefix = function () {
        return this.removeInterceptor(api_prefix_interceptor_1.ApiPrefixInterceptor);
    };
    HttpService.prototype.disableToken = function () {
        return this.removeInterceptor(token_interceptor_1.TokenInterceptor);
    };
    // Override the original method to wire interceptors when triggering the request.
    HttpService.prototype.request = function (method, url, options) {
        if (url.includes('/assets/i18n/')) {
            return new http_1.HttpClient(this.httpHandler).request(method, url, options);
        }
        var handler = this.interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, this.httpHandler);
        return new http_1.HttpClient(handler).request(method, url, options);
    };
    HttpService.prototype.removeInterceptor = function (interceptorType) {
        return new HttpService_1(this.httpHandler, this.injector, this.interceptors.filter(function (i) { return !(i instanceof interceptorType); }));
    };
    HttpService.prototype.addInterceptor = function (interceptor) {
        return new HttpService_1(this.httpHandler, this.injector, this.interceptors.concat([interceptor]));
    };
    var HttpService_1;
    HttpService = HttpService_1 = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        }),
        __param(2, (0, core_1.Optional)()),
        __param(2, (0, core_1.Inject)(exports.HTTP_DYNAMIC_INTERCEPTORS))
    ], HttpService);
    return HttpService;
}(http_1.HttpClient));
exports.HttpService = HttpService;
