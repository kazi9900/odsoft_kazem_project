"use strict";
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
exports.CoreModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var http_service_1 = require("./services/http.service");
var data_service_1 = require("./services/data.service");
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        // Import guard
        if (parentModule) {
            throw new Error("".concat(parentModule, " has already been loaded. Import Core module in the AppModule only."));
        }
    }
    CoreModule = __decorate([
        (0, core_1.NgModule)({
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
            ],
            providers: [
                {
                    provide: http_1.HttpClient,
                    useClass: http_service_1.HttpService
                },
                data_service_1.DataService,
            ]
        }),
        __param(0, (0, core_1.Optional)()),
        __param(0, (0, core_1.SkipSelf)())
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
