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
exports.__esModule = true;
exports.UserProjectViewModel = void 0;
var projectUserViewModel_1 = require("../../maintenance/viewmodels/projectUserViewModel");
var projectViewModel_1 = require("../../maintenance/viewmodels/projectViewModel");
var UserProjectViewModel = /** @class */ (function (_super) {
    __extends(UserProjectViewModel, _super);
    function UserProjectViewModel(registo) {
        var _this = _super.call(this, registo) || this;
        _this.copyFrom(registo);
        return _this;
    }
    UserProjectViewModel.prototype.copyFrom = function (registo) {
        if (registo) {
            this.userId = registo.userId;
            this.projectId = registo.projectId;
            this.isprojectOwner = registo.isprojectOwner;
            this.isAutorized = registo.isAutorized;
            this.project = registo.project ? new projectViewModel_1.ProjectViewModel(registo.project) : null;
        }
    };
    return UserProjectViewModel;
}(projectUserViewModel_1.ProjectUserViewModel));
exports.UserProjectViewModel = UserProjectViewModel;
