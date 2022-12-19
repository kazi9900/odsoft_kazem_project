"use strict";
exports.__esModule = true;
exports.ProjectUserViewModel = void 0;
var ProjectUserViewModel = /** @class */ (function () {
    function ProjectUserViewModel(registo) {
        this.copyFrom(registo);
    }
    ProjectUserViewModel.prototype.copyFrom = function (registo) {
        if (registo) {
            this.userId = registo.userId;
            this.userName = registo.userName;
            this.projectId = registo.projectId;
            this.isprojectOwner = registo.isprojectOwner;
            this.isAutorized = registo.isAutorized;
        }
    };
    return ProjectUserViewModel;
}());
exports.ProjectUserViewModel = ProjectUserViewModel;
