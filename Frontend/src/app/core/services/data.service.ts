import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { CredentialsService } from './credentials.service';
import { map } from 'rxjs/operators';
import { UserViewModel } from '../../signin-signup/signin-form/viewmodels/userViewModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private credencialsService: CredentialsService,
    private httpService: HttpClient) { }

  public loadCurrentUser(): Observable<UserViewModel> {
    if (this.credencialsService.isAuthenticated()) {
      const body = JSON.stringify(this.credencialsService.getCredentials.email);
      return this.httpService.post<UserViewModel>('User/email/', body)
        .pipe(map((response: UserViewModel) => {
          this.credencialsService.currentUser = response ? new UserViewModel(response) : null;
          return this.credencialsService.currentUser;
        }));

    } else {
      return of(null);
    }
  }
}
