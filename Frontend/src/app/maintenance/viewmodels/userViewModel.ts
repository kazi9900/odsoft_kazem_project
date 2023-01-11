import { UserRoleViewModel } from './userRoleViewModel';

export class UserViewModel {
  public id: number;
  public name: string;
  public email: string;
  public userRoles: UserRoleViewModel[];

  constructor(registo?: UserViewModel) {
    this.copyFrom(registo);
  }

  public copyFrom(registo?: UserViewModel): void {
    if (registo) {
      this.id = registo.id;
      this.name = registo.name;
      this.email = registo.email;
      this.userRoles = registo.userRoles ? registo.userRoles.map(x => new UserRoleViewModel(x)) : [];
    }
  }
}
