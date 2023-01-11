"use strict";
exports.__esModule = true;
exports.UserViewModel = void 0;
var userRoleViewModel_1 = require("./userRoleViewModel");
var UserViewModel = /** @class */ (function () {
    function UserViewModel(registo) {
        this.copyFrom(registo);
    }
    UserViewModel.prototype.copyFrom = function (registo) {
        if (registo) {
            this.id = registo.id;
            this.name = registo.name;
            this.email = registo.email;
            this.userRoles = registo.userRoles ? registo.userRoles.map(function (x) { return new userRoleViewModel_1.UserRoleViewModel(x); }) : [];
        }
    };
    return UserViewModel;
}());
exports.UserViewModel = UserViewModel;
