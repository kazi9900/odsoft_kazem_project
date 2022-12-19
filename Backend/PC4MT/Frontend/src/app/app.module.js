"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.httpTranslateLoader = exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var core_module_1 = require("./core/core.module");
var shared_module_1 = require("./shared/shared.module");
var home_component_1 = require("./home/home.component");
var contribute_component_1 = require("./contribute/contribute.component");
var nav_bar_component_1 = require("./shared/nav-bar/nav-bar.component");
var ngx_toastr_1 = require("ngx-toastr");
var animations_1 = require("@angular/platform-browser/animations");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var signin_form_component_1 = require("./signin-signup/signin-form/signin-form.component");
var signup_form_component_1 = require("./signin-signup/signup-form/signup-form.component");
var signin_signup_component_1 = require("./signin-signup/signin-signup.component");
var signup_service_1 = require("./signin-signup/signup-form/services/signup.service");
var contribute_translate_component_1 = require("./contribute/translate/contribute-translate.component");
var contribute_service_1 = require("./contribute/services/contribute.service");
var contribute_translate_lista_item_component_1 = require("./contribute/translate/contribute-translate-lista-item.component");
var contribute_search_component_1 = require("./contribute/search/contribute-search.component");
var contribute_search_lista_item_component_1 = require("./contribute/search/contribute-search-lista-item.component");
var contribute_download_component_1 = require("./contribute/download/contribute-download.component");
var maintenance_component_1 = require("./maintenance/maintenance.component");
var maintenance_download_settings_component_1 = require("./maintenance/maintenance-download-settings/maintenance-download-settings.component");
var maintenance_service_1 = require("./maintenance/services/maintenance.service");
var maintenance_languages_component_1 = require("./maintenance/maintenance-languages/maintenance-languages.component");
var maintenance_projects_component_1 = require("./maintenance/maintenance-projects/maintenance-projects.component");
var maintenance_users_component_1 = require("./maintenance/maintenance-users/maintenance-users.component");
var contribute_projects_component_1 = require("./contribute/projects/contribute-projects.component");
var ngx_spinner_1 = require("ngx-spinner");
var notification_service_1 = require("./core/services/notification.service");
var profile_component_1 = require("./profile/profile.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                app_component_1.AppComponent,
                contribute_component_1.ContributeComponent,
                contribute_translate_component_1.ContributeTranslateComponent,
                contribute_translate_lista_item_component_1.ContributeTranslateListaItemComponent,
                contribute_search_component_1.ContributeSearchComponent,
                contribute_search_lista_item_component_1.ContributeSearchListaItemComponent,
                contribute_download_component_1.ContributeDownloadComponent,
                contribute_projects_component_1.ContributeProjectsComponent,
                home_component_1.HomeComponent,
                maintenance_component_1.MaintenanceComponent,
                maintenance_download_settings_component_1.MaintenanceDownloadSettingsComponent,
                maintenance_languages_component_1.MaintenanceLanguagesComponent,
                maintenance_projects_component_1.MaintenanceProjectsComponent,
                maintenance_users_component_1.MaintenanceUsersComponent,
                nav_bar_component_1.NavBarComponent,
                signin_signup_component_1.SignInSignUpComponent,
                signin_form_component_1.SignInFormComponent,
                signup_form_component_1.SignUpFormComponent,
                profile_component_1.ProfileComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                core_module_1.CoreModule,
                shared_module_1.SharedModule,
                app_routing_module_1.AppRoutingModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: httpTranslateLoader,
                        deps: [http_1.HttpClient]
                    },
                    defaultLanguage: 'en'
                }),
                ngx_spinner_1.NgxSpinnerModule
            ],
            providers: [
                notification_service_1.NotificationService,
                signup_service_1.SignUpService,
                contribute_service_1.ContributeService,
                maintenance_service_1.MaintenanceService,
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function httpTranslateLoader(http) {
    return new http_loader_1.TranslateHttpLoader(http);
}
exports.httpTranslateLoader = httpTranslateLoader;
