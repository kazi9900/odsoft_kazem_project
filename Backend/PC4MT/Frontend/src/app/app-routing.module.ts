import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContributeComponent } from './contribute/contribute.component';
import { ContributeDownloadComponent } from './contribute/download/contribute-download.component';
import { ContributeProjectsComponent } from './contribute/projects/contribute-projects.component';
import { ContributeSearchComponent } from './contribute/search/contribute-search.component';
import { ContributeTranslateComponent } from './contribute/translate/contribute-translate.component';
import { HomeComponent } from './home/home.component';
import { MaintenanceDownloadSettingsComponent } from './maintenance/maintenance-download-settings/maintenance-download-settings.component';
import { MaintenanceLanguagesComponent } from './maintenance/maintenance-languages/maintenance-languages.component';
import { MaintenanceProjectsComponent } from './maintenance/maintenance-projects/maintenance-projects.component';
import { MaintenanceUsersComponent } from './maintenance/maintenance-users/maintenance-users.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInSignUpComponent } from './signin-signup/signin-signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'contribute',
    component: ContributeComponent,
    children: [
      { path: 'translate', component: ContributeTranslateComponent },
      { path: 'projects', component: ContributeProjectsComponent },
      { path: 'search', component: ContributeSearchComponent },
      { path: 'download', component: ContributeDownloadComponent }
    ]
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent,
    children: [
      { path: 'users', component: MaintenanceUsersComponent },
      { path: 'projects', component: MaintenanceProjectsComponent },
      { path: 'languages', component: MaintenanceLanguagesComponent },
      { path: 'downloadsettings', component: MaintenanceDownloadSettingsComponent }
    ]
  },
  { path: 'signin-signup', component: SignInSignUpComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
