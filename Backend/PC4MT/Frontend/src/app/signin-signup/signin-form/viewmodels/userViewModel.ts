import { IProficiencyLanguage } from '../../signup-form/viewmodels/interfaces/proficiencyLanguage';
import { IUserProject } from '../../signup-form/viewmodels/interfaces/userProject';

export class UserViewModel {
  public id: number;
  public email: string;
  public name: string;
  public userProjects: IUserProject[];
  public proficiencyLanguages: IProficiencyLanguage[];

  constructor(registo?: UserViewModel) {
    this.copyFrom(registo);
  }

  public copyFrom(registo?: UserViewModel): void {
    if (registo) {
      this.id = registo.id;
      this.email = registo.email;
      this.name = registo.name;
      this.userProjects = registo.userProjects.map(x => {
        return {
          userId: x.userId,
          projectId: x.projectId,
          isAutorized: x.isAutorized,
          isProjectOwner: x.isProjectOwner,
          project: null
        } as IUserProject;
      });
      this.proficiencyLanguages = registo.proficiencyLanguages.map(x => {
        return {
          userId: x.userId,
          languageId: x.languageId,
          levelProficiency: x.levelProficiency
        } as IProficiencyLanguage;
      });
    }
  }
}
