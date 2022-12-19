import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ContributeComponent } from './contribute/contribute.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SignInFormComponent } from './signin-signup/signin-form/signin-form.component';
import { SignUpFormComponent } from './signin-signup/signup-form/signup-form.component';
import { SignInSignUpComponent } from './signin-signup/signin-signup.component';
import { SignUpService } from './signin-signup/signup-form/services/signup.service';
import { ContributeTranslateComponent } from './contribute/translate/contribute-translate.component';
import { ContributeService } from './contribute/services/contribute.service';
import { ContributeTranslateListaItemComponent } from './contribute/translate/contribute-translate-lista-item.component';
import { ContributeSearchComponent } from './contribute/search/contribute-search.component';
import { ContributeSearchListaItemComponent } from './contribute/search/contribute-search-lista-item.component';
import { ContributeDownloadComponent } from './contribute/download/contribute-download.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MaintenanceDownloadSettingsComponent } from './maintenance/maintenance-download-settings/maintenance-download-settings.component';
import { MaintenanceService } from './maintenance/services/maintenance.service';
import { MaintenanceLanguagesComponent } from './maintenance/maintenance-languages/maintenance-languages.component';
import { MaintenanceProjectsComponent } from './maintenance/maintenance-projects/maintenance-projects.component';
import { MaintenanceUsersComponent } from './maintenance/maintenance-users/maintenance-users.component';
import { ContributeProjectsComponent } from './contribute/projects/contribute-projects.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NotificationService } from './core/services/notification.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ContributeComponent,
    ContributeTranslateComponent,
    ContributeTranslateListaItemComponent,
    ContributeSearchComponent,
    ContributeSearchListaItemComponent,
    ContributeDownloadComponent,
    ContributeProjectsComponent,
    HomeComponent,
    MaintenanceComponent,
    MaintenanceDownloadSettingsComponent,
    MaintenanceLanguagesComponent,
    MaintenanceProjectsComponent,
    MaintenanceUsersComponent,
    NavBarComponent,
    SignInSignUpComponent,
    SignInFormComponent,
    SignUpFormComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
    NgxSpinnerModule
  ],
  providers: [
    NotificationService,
    SignUpService,
    ContributeService,
    MaintenanceService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
