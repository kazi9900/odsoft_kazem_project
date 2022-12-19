import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CredentialsService } from '../../core/services/credentials.service';
import { HttpService } from '../../core/services/http.service';
import { DownloadSettignsViewModel } from '../viewmodels/downloadSettingsViewModel';
import { IUser } from '../viewmodels/interfaces/user';
import { LanguageViewModel } from '../viewmodels/languageViewModel';
import { ProjectViewModel } from '../viewmodels/projectViewModel';
import { UserViewModel } from '../viewmodels/userViewModel';

@Injectable()
export class MaintenanceService {
  private url = 'Maintenance/';

  constructor(private httpService: HttpService,
    private credentialsService: CredentialsService) { }

  /* GET */

  public getDownloadSettings(): Observable<DownloadSettignsViewModel> {
    return this.httpService.get<DownloadSettignsViewModel>(this.url + 'downloadsettings')
      .pipe(map((response: DownloadSettignsViewModel) => {
        return response ? new DownloadSettignsViewModel(response) : null;
      }));
  }

  public getLanguages(): Observable<LanguageViewModel[]> {
    return this.httpService.get<LanguageViewModel[]>(this.url + 'languages')
      .pipe(map((response: LanguageViewModel[]) => {
        return response ? response.map(x => new LanguageViewModel(x)) : [];
      }));
  }

  public getProjects(): Observable<ProjectViewModel[]> {
    return this.httpService.get<ProjectViewModel[]>(this.url + 'projects')
      .pipe(map((response: ProjectViewModel[]) => {
        return response ? response.map(x => new ProjectViewModel(x)) : [];
      }));
  }

  public getUsers(): Observable<UserViewModel[]> {
    return this.httpService.get<UserViewModel[]>(this.url + 'users')
      .pipe(map((response: UserViewModel[]) => {
        return response ? response.map(x => new UserViewModel(x)) : [];
      }));
  }

  public getUsersLight(): Observable<IUser[]> {
    return this.httpService.get<IUser[]>(this.url + 'userslight');
  }

  /* POST */

  public insertDownloadSettings(registo: DownloadSettignsViewModel): Observable<DownloadSettignsViewModel> {
    const body = JSON.stringify(registo);

    return this.httpService.post<DownloadSettignsViewModel>(this.url + 'downloadsettings', body)
      .pipe(map((response: DownloadSettignsViewModel) => {
        return response ? new DownloadSettignsViewModel(response) : null;
      }));
  }

  public insertLanguage(registo: LanguageViewModel): Observable<LanguageViewModel> {
    const body = JSON.stringify(registo);

    return this.httpService.post<LanguageViewModel>(this.url + 'language', body)
      .pipe(map((response: LanguageViewModel) => {
        return response ? new LanguageViewModel(response) : null;
      }));
  }

  public insertProject(registo: ProjectViewModel): Observable<ProjectViewModel> {
    if (this.credentialsService.getCredentials) {
      registo.userCreationId = this.credentialsService.getCredentials.id;
      registo.userChangeId = this.credentialsService.getCredentials.id;
    }

    const body = JSON.stringify(registo);

    return this.httpService.post<ProjectViewModel>(this.url + 'project', body)
      .pipe(map((response: ProjectViewModel) => {
        return response ? new ProjectViewModel(response) : null;
      }));
  }

  public insertUser(registo: UserViewModel): Observable<UserViewModel> {

    const body = JSON.stringify(registo);

    return this.httpService.post<UserViewModel>(this.url + 'user', body)
      .pipe(map((response: UserViewModel) => {
        return response ? new UserViewModel(response) : null;
      }));
  }

  /* PUT */

  public updateDownloadSettings(registo: DownloadSettignsViewModel): Observable<DownloadSettignsViewModel> {
    const body = JSON.stringify(registo);

    return this.httpService.put<DownloadSettignsViewModel>(this.url + 'downloadsettings', body)
      .pipe(map((response: DownloadSettignsViewModel) => {
        return response ? new DownloadSettignsViewModel(response) : null;
      }));
  }

  public updateLanguage(registo: LanguageViewModel): Observable<LanguageViewModel> {
    const body = JSON.stringify(registo);

    return this.httpService.put<LanguageViewModel>(this.url + 'language', body)
      .pipe(map((response: LanguageViewModel) => {
        return response ? new LanguageViewModel(response) : null;
      }));
  }

  public updateProject(registo: ProjectViewModel): Observable<ProjectViewModel> {
    if (this.credentialsService.getCredentials) {
      registo.userChangeId = this.credentialsService.getCredentials.id;
    }

    const body = JSON.stringify(registo);

    return this.httpService.put<ProjectViewModel>(this.url + 'project', body)
      .pipe(map((response: ProjectViewModel) => {
        return response ? new ProjectViewModel(response) : null;
      }));
  }

  public updateUser(registo: UserViewModel): Observable<UserViewModel> {

    const body = JSON.stringify(registo);

    return this.httpService.put<UserViewModel>(this.url + 'user', body)
      .pipe(map((response: UserViewModel) => {
        return response ? new UserViewModel(response) : null;
      }));
  }

  /* DELETE */
}
