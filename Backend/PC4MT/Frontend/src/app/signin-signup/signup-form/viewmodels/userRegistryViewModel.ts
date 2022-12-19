import { IProficiencyLanguage } from './interfaces/proficiencyLanguage';
import { IUserProject } from './interfaces/userProject';

export class UserRegisterViewModel {
  public name: string;
  public email: string;
  public country: number;
  public proficiencyLanguages: IProficiencyLanguage[];
  public userProjects: IUserProject[];
}
