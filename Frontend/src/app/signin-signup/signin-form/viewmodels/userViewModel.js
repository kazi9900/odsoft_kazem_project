"use strict";
exports.__esModule = true;
exports.UserViewModel = void 0;
var UserViewModel = /** @class */ (function () {
    function UserViewModel(registo) {
        this.copyFrom(registo);
    }
    UserViewModel.prototype.copyFrom = function (registo) {
        if (registo) {
            this.id = registo.id;
            this.email = registo.email;
            this.name = registo.name;
            this.userProjects = registo.userProjects.map(function (x) {
                return {
                    userId: x.userId,
                    projectId: x.projectId,
                    isAutorized: x.isAutorized,
                    isProjectOwner: x.isProjectOwner,
                    project: null
                };
            });
            this.proficiencyLanguages = registo.proficiencyLanguages.map(function (x) {
                return {
                    userId: x.userId,
                    languageId: x.languageId,
                    levelProficiency: x.levelProficiency
                };
            });
        }
    };
    return UserViewModel;
}());
exports.UserViewModel = UserViewModel;
