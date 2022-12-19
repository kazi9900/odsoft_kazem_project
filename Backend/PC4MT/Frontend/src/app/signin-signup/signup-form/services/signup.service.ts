import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpService } from '../../../core/services/http.service';
import { IChangePassword } from '../../../profile/viewmodels/changePassword';
import { UserViewModel } from '../../signin-form/viewmodels/userViewModel';
import { ResetPasswordViewModel } from '../viewmodels/passwordResetViewModel';
import { UserRegisterViewModel } from '../viewmodels/userRegistryViewModel';

@Injectable()
export class SignUpService {
  private url = 'User/';

  constructor(private httpService: HttpService) { }

  public changePassword(changePassword: IChangePassword): Observable<boolean> {
    const body = JSON.stringify(changePassword);
    return this.httpService.put<boolean>(this.url + 'changePassword/', body);
  }

  public resetPassword(resetPassword: ResetPasswordViewModel): Observable<boolean> {
    const body = JSON.stringify(resetPassword);
    return this.httpService.post<boolean>(this.url + 'resetpassword/', body);
  }

  public checkCodeResetPassword(resetPassword: ResetPasswordViewModel): Observable<boolean> {
    const body = JSON.stringify(resetPassword);
    return this.httpService.post<boolean>(this.url + 'checkcoderesetpassword/', body);
  }

  public sendCodeResetPassword(resetPassword: ResetPasswordViewModel): Observable<boolean> {
    const body = JSON.stringify(resetPassword);
    return this.httpService.post<boolean>(this.url + 'sendcoderesetpassword/', body);
  }

  public emailExists(email: string): Observable<UserViewModel> {
    const body = JSON.stringify(email);
    return this.httpService.post<UserViewModel>(this.url + 'email/', body);
  }

  public registerUser(userRegister: UserRegisterViewModel): Observable<boolean> {
    const body = JSON.stringify(userRegister);
    return this.httpService.post<boolean>(this.url, body);
  }

  public updateProfile(userProfile: UserViewModel): Observable<UserViewModel> {
    const body = JSON.stringify(userProfile);
    return this.httpService.put<UserViewModel>(this.url + 'profile/', body)
      .pipe(map((response: UserViewModel) => {
        return response ? new UserViewModel(response) : null;
      }));
  }

  public existsSomeSentenceUserIdAndLanguageId(userId: number, languageId: number): Observable<boolean> {
    return this.httpService.get<boolean>(this.url + 'existssomesentence/' + userId + '/' + languageId);
  }
}
