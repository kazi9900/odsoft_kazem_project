"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var contribute_component_1 = require("./contribute/contribute.component");
var contribute_download_component_1 = require("./contribute/download/contribute-download.component");
var contribute_projects_component_1 = require("./contribute/projects/contribute-projects.component");
var contribute_search_component_1 = require("./contribute/search/contribute-search.component");
var contribute_translate_component_1 = require("./contribute/translate/contribute-translate.component");
var home_component_1 = require("./home/home.component");
var maintenance_download_settings_component_1 = require("./maintenance/maintenance-download-settings/maintenance-download-settings.component");
var maintenance_languages_component_1 = require("./maintenance/maintenance-languages/maintenance-languages.component");
var maintenance_projects_component_1 = require("./maintenance/maintenance-projects/maintenance-projects.component");
var maintenance_users_component_1 = require("./maintenance/maintenance-users/maintenance-users.component");
var maintenance_component_1 = require("./maintenance/maintenance.component");
var profile_component_1 = require("./profile/profile.component");
var signin_signup_component_1 = require("./signin-signup/signin-signup.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    {
        path: 'contribute',
        component: contribute_component_1.ContributeComponent,
        children: [
            { path: 'translate', component: contribute_translate_component_1.ContributeTranslateComponent },
            { path: 'projects', component: contribute_projects_component_1.ContributeProjectsComponent },
            { path: 'search', component: contribute_search_component_1.ContributeSearchComponent },
            { path: 'download', component: contribute_download_component_1.ContributeDownloadComponent }
        ]
    },
    {
        path: 'maintenance',
        component: maintenance_component_1.MaintenanceComponent,
        children: [
            { path: 'users', component: maintenance_users_component_1.MaintenanceUsersComponent },
            { path: 'projects', component: maintenance_projects_component_1.MaintenanceProjectsComponent },
            { path: 'languages', component: maintenance_languages_component_1.MaintenanceLanguagesComponent },
            { path: 'downloadsettings', component: maintenance_download_settings_component_1.MaintenanceDownloadSettingsComponent }
        ]
    },
    { path: 'signin-signup', component: signin_signup_component_1.SignInSignUpComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        (0, core_1.NgModule)({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
