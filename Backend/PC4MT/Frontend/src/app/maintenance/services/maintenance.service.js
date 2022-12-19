"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaintenanceService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var downloadSettingsViewModel_1 = require("../viewmodels/downloadSettingsViewModel");
var languageViewModel_1 = require("../viewmodels/languageViewModel");
var projectViewModel_1 = require("../viewmodels/projectViewModel");
var userViewModel_1 = require("../viewmodels/userViewModel");
var MaintenanceService = /** @class */ (function () {
    function MaintenanceService(httpService, credentialsService) {
        this.httpService = httpService;
        this.credentialsService = credentialsService;
        this.url = 'Maintenance/';
    }
    /* GET */
    MaintenanceService.prototype.getDownloadSettings = function () {
        return this.httpService.get(this.url + 'downloadsettings')
            .pipe((0, operators_1.map)(function (response) {
            return response ? new downloadSettingsViewModel_1.DownloadSettignsViewModel(response) : null;
        }));
    };
    MaintenanceService.prototype.getLanguages = function () {
        return this.httpService.get(this.url + 'languages')
            .pipe((0, operators_1.map)(function (response) {
            return response ? response.map(function (x) { return new languageViewModel_1.LanguageViewModel(x); }) : [];
        }));
    };
    MaintenanceService.prototype.getProjects = function () {
        return this.httpService.get(this.url + 'projects')
            .pipe((0, operators_1.map)(function (response) {
            return response ? response.map(function (x) { return new projectViewModel_1.ProjectViewModel(x); }) : [];
        }));
    };
    MaintenanceService.prototype.getUsers = function () {
        return this.httpService.get(this.url + 'users')
            .pipe((0, operators_1.map)(function (response) {
            return response ? response.map(function (x) { return new userViewModel_1.UserViewModel(x); }) : [];
        }));
    };
    MaintenanceService.prototype.getUsersLight = function () {
        return this.httpService.get(this.url + 'userslight');
    };
    /* POST */
    MaintenanceService.prototype.insertDownloadSettings = function (registo) {
        var body = JSON.stringify(registo);
        return this.httpService.post(this.url + 'downloadsettings', body)
            .pipe((0, operators_1.map)(function (response) {
            return response ? new downloadSettingsViewModel_1.DownloadSettignsViewModel(response) : null;
        }));
    };
    MaintenanceService.prototype.insertLanguage = function (registo) {
        var body = JSON.stringify(registo);
        return this.httpService.post(this.url + 'language', body)
            .pipe((0, operators_1.map)(function (response) {
            return response ? new languageViewModel_1.LanguageViewModel(response) : null;
        }));
    };
    MaintenanceService.prototype.insertProject = function (registo) {
        if (this.credentialsService.getCredentials) {
            registo.userCreationId = this.credentialsService.getCredentials.id;
            registo.userChangeId = this.credentialsService.getCredentials.id;
        }
        var body = JSON.stringify(registo);
        return this.httpService.post(this.url + 'project', body)
            .pipe((0, operators_1.map)(function (response) {
            return response ? new projectViewModel_1.ProjectViewModel(response) : null;
        }));
    };
    MaintenanceService.prototype.insertUser = function (registo) {
        var body = JSON.stringify(registo);
        return this.httpService.post(this.url + 'user', body)
            .pipe((0, operators_1.map)(function (response) {
            return response ? new userViewModel_1.UserViewModel(response) : null;
        }));
    };
    /* PUT */
    MaintenanceService.prototype.updateDownloadSettings = function (registo) {
        var body = JSON.stringify(registo);
        return this.httpService.put(this.url + 'downloadsettings', body)
            .pipe((0, operators_1.map)(function (response) {
            return response ? new downloadSettingsViewModel_1.DownloadSettignsViewModel(response) : null;
        }));
    };
    MaintenanceService.prototype.updateLanguage = function (registo) {
        var body = JSON.stringify(registo);
        return this.httpService.put(this.url + 'language', body)
            .pipe((0, operators_1.map)(function (response) {
            return response ? new languageViewModel_1.LanguageViewModel(response) : null;
        }));
    };
    MaintenanceService.prototype.updateProject = function (registo) {
        if (this.credentialsService.getCredentials) {
            registo.userChangeId = this.credentialsService.getCredentials.id;
        }
        var body = JSON.stringify(registo);
        return this.httpService.put(this.url + 'project', body)
            .pipe((0, operators_1.map)(function (response) {
            return response ? new projectViewModel_1.ProjectViewModel(response) : null;
        }));
    };
    MaintenanceService.prototype.updateUser = function (registo) {
        var body = JSON.stringify(registo);
        return this.httpService.put(this.url + 'user', body)
            .pipe((0, operators_1.map)(function (response) {
            return response ? new userViewModel_1.UserViewModel(response) : null;
        }));
    };
    MaintenanceService = __decorate([
        (0, core_1.Injectable)()
    ], MaintenanceService);
    return MaintenanceService;
}());
exports.MaintenanceService = MaintenanceService;
