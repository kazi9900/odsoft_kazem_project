export class UserRoleViewModel {
  public userId: number;
  public roleId: number;
  public roleName: string;

  constructor(registo?: UserRoleViewModel) {
    this.copyFrom(registo);
  }

  public copyFrom(registo?: UserRoleViewModel): void {
    if (registo) {
      this.userId = registo.userId;
      this.roleId = registo.roleId;
      this.roleName = registo.roleName;
    }
  }
}
