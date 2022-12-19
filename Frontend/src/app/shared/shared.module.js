"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var animations_1 = require("@angular/platform-browser/animations");
var router_1 = require("@angular/router");
var devextreme_angular_1 = require("devextreme-angular");
var ngx_toastr_1 = require("ngx-toastr");
var ngx_virtual_scroller_1 = require("ngx-virtual-scroller");
var ngx_pipes_1 = require("ngx-pipes");
var functionCall_pipe_1 = require("./pipes/functionCall.pipe");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        (0, core_1.NgModule)({
            imports: [
                router_1.RouterModule,
                animations_1.BrowserAnimationsModule,
                common_1.CommonModule,
                devextreme_angular_1.DxCheckBoxModule,
                devextreme_angular_1.DxSelectBoxModule,
                devextreme_angular_1.DxTagBoxModule,
                devextreme_angular_1.DxSliderModule,
                devextreme_angular_1.DxPopupModule,
                devextreme_angular_1.DxScrollViewModule,
                devextreme_angular_1.DxRadioGroupModule,
                ngx_pipes_1.NgPipesModule,
                ngx_toastr_1.ToastrModule,
                ngx_virtual_scroller_1.VirtualScrollerModule,
            ],
            declarations: [
                functionCall_pipe_1.FunctionCallPipe,
            ],
            exports: [
                router_1.RouterModule,
                devextreme_angular_1.DxCheckBoxModule,
                devextreme_angular_1.DxSelectBoxModule,
                devextreme_angular_1.DxTagBoxModule,
                devextreme_angular_1.DxSliderModule,
                devextreme_angular_1.DxPopupModule,
                devextreme_angular_1.DxScrollViewModule,
                devextreme_angular_1.DxRadioGroupModule,
                ngx_pipes_1.NgPipesModule,
                ngx_toastr_1.ToastrModule,
                ngx_virtual_scroller_1.VirtualScrollerModule,
                functionCall_pipe_1.FunctionCallPipe,
            ],
            providers: [
                ngx_toastr_1.ToastrService,
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
