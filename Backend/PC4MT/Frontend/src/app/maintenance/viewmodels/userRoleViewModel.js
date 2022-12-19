"use strict";
exports.__esModule = true;
exports.UserRoleViewModel = void 0;
var UserRoleViewModel = /** @class */ (function () {
    function UserRoleViewModel(registo) {
        this.copyFrom(registo);
    }
    UserRoleViewModel.prototype.copyFrom = function (registo) {
        if (registo) {
            this.userId = registo.userId;
            this.roleId = registo.roleId;
            this.roleName = registo.roleName;
        }
    };
    return UserRoleViewModel;
}());
exports.UserRoleViewModel = UserRoleViewModel;
