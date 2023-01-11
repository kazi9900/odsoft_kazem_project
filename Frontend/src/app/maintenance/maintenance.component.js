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
exports.__esModule = true;
exports.MaintenanceComponent = void 0;
var core_1 = require("@angular/core");
var until_destroy_1 = require("@ngneat/until-destroy");
var baseComponent_1 = require("../shared/baseComponent");
var MaintenanceComponent = /** @class */ (function (_super) {
    __extends(MaintenanceComponent, _super);
    function MaintenanceComponent(router, route) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.route = route;
        return _this;
    }
    MaintenanceComponent.prototype.ngOnInit = function () {
        this.router.navigate(['users'], { relativeTo: this.route });
    };
    MaintenanceComponent.prototype.onOpenPage = function (opt) {
        switch (opt) {
            case 'users':
                this.router.navigate(['users'], { relativeTo: this.route });
                break;
            case 'projects':
                this.router.navigate(['projects'], { relativeTo: this.route });
                break;
            case 'languages':
                this.router.navigate(['languages'], { relativeTo: this.route });
                break;
            case 'downloadsettings':
                this.router.navigate(['downloadsettings'], { relativeTo: this.route });
                break;
            default:
                break;
        }
    };
    MaintenanceComponent = __decorate([
        (0, until_destroy_1.UntilDestroy)(),
        (0, core_1.Component)({
            selector: 'app-maintenance',
            templateUrl: './maintenance.component.html',
            styleUrls: ['./maintenance.component.scss']
        })
    ], MaintenanceComponent);
    return MaintenanceComponent;
}(baseComponent_1.BaseComponent));
exports.MaintenanceComponent = MaintenanceComponent;
