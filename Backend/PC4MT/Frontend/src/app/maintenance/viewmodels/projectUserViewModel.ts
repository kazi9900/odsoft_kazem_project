export class ProjectUserViewModel {
  public userId: number;
  public userName: string;
  public projectId: number;
  public isprojectOwner: boolean | null;
  public isAutorized: boolean | null;

  constructor(registo?: ProjectUserViewModel) {
    this.copyFrom(registo);
  }

  public copyFrom(registo?: ProjectUserViewModel): void {
    if (registo) {
      this.userId = registo.userId;
      this.userName = registo.userName;
      this.projectId = registo.projectId;
      this.isprojectOwner = registo.isprojectOwner;
      this.isAutorized = registo.isAutorized;
    }
  }
}
