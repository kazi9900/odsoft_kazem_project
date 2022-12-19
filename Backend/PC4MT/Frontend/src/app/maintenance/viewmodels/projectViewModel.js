"use strict";
exports.__esModule = true;
exports.ProjectViewModel = void 0;
var projectUserViewModel_1 = require("./projectUserViewModel");
var ProjectViewModel = /** @class */ (function () {
    function ProjectViewModel(registo) {
        this.projectUsers = [];
        this.copyFrom(registo);
    }
    ProjectViewModel.prototype.copyFrom = function (registo) {
        if (registo) {
            this.id = registo.id;
            this.name = registo.name;
            this.description = registo.description;
            this.language1Id = registo.language1Id;
            this.language1Name = registo.language1Name;
            this.language2Id = registo.language2Id;
            this.language2Name = registo.language2Name;
            this.active = registo.active;
            this.userCreationId = registo.userCreationId;
            this.dateCreation = registo.dateCreation;
            this.userChangeId = registo.userChangeId;
            this.dateChange = registo.dateChange;
            this.projectUsers = registo.projectUsers ? registo.projectUsers.map(function (x) { return new projectUserViewModel_1.ProjectUserViewModel(x); }) : [];
            this.countSentencesL1 = registo.countSentencesL1;
            this.countSentencesL1WithTranslation = registo.countSentencesL1WithTranslation;
        }
    };
    return ProjectViewModel;
}());
exports.ProjectViewModel = ProjectViewModel;
