import { Injectable } from '@angular/core';

import { RoleEnum } from '../../shared/helpers/roleEnum';
import { UserViewModel } from '../../signin-signup/signin-form/viewmodels/userViewModel';
import { ICredentials } from '../viewmodels/interfaces/credentials';

const credentialsKey = 'credentials';

/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  private credentials: ICredentials | null = null;
  public currentUser: UserViewModel | null = null;

  constructor() {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      this.credentials = JSON.parse(savedCredentials);
    }
  }

  /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  public isAuthenticated(): boolean {
    return !!this.getCredentials;
  }

  public isRootOrAdmin(): boolean {
    return this.getCredentials && this.getCredentials.roleId &&
      (this.getCredentials.roleId === RoleEnum.Root || this.getCredentials.roleId === RoleEnum.Admin);
  }

  public isEditor(): boolean {
    return this.getCredentials && this.getCredentials.roleId && (this.getCredentials.roleId === RoleEnum.Root ||
      this.getCredentials.roleId === RoleEnum.Admin || this.getCredentials.roleId === RoleEnum.Editor);
  }

  /**
   * Gets the user credentials.
   * @return The user credentials or null if the user is not authenticated.
   */
  get getCredentials(): ICredentials | null {
    return this.credentials;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param credentials The user credentials.
   * @param remember True to remember credentials across sessions.
   */
  public setCredentials(credentials?: ICredentials, remember?: boolean): void {
    this.credentials = credentials || null;

    if (credentials) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(credentialsKey, JSON.stringify(credentials));

    } else {
      sessionStorage.removeItem(credentialsKey);
      localStorage.removeItem(credentialsKey);
      this.currentUser = null;
    }
  }
}
