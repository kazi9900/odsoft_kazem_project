import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CredentialsService } from './credentials.service';
import { HttpClient } from '@angular/common/http';
import { ILoginContext } from '../viewmodels/interfaces/loginContext';
import { ICredentials } from '../viewmodels/interfaces/credentials';
import { IChangePassword } from '../viewmodels/interfaces/changePassword';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = 'User';
  private data: ICredentials;

  constructor(
    private credentialsService: CredentialsService,
    private dataService: DataService,
    private http: HttpClient) { }

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  public login(context: ILoginContext): Observable<ICredentials> {
    const body = JSON.stringify(context);

    return new Observable<ICredentials>(observer => {
      this.http.post<ICredentials>(this.url + '/authenticate', body).subscribe(
        credentials => {
          this.data = credentials;
          this.credentialsService.setCredentials(this.data);
          this.dataService.loadCurrentUser()
            .subscribe(() => {
              observer.next(credentials);
            }, () => {
              observer.next(credentials);
            });
        },
        error => {
          observer.error(error);
        }
      );
    });
  }

  public changePassword(changePassword: IChangePassword): Observable<any> {
    const body = JSON.stringify(changePassword);

    return this.http.put(this.url + '/changePassword', body);
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  public logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
