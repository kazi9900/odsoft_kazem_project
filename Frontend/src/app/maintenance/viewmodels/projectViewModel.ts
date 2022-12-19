import { ProjectUserViewModel } from './projectUserViewModel';

export class ProjectViewModel {
  public id: number | null;
  public name: string;
  public description: string;
  public language1Id: number;
  public language1Name: number;
  public language2Id: number;
  public language2Name: number;
  public active: boolean | null;
  public userCreationId: number;
  public dateCreation: Date;
  public userChangeId: number;
  public dateChange: Date;
  public projectUsers: ProjectUserViewModel[] = [];

  public countSentencesL1: number | null;
  public countSentencesL1WithTranslation: number | null;

  constructor(registo?: ProjectViewModel) {
    this.copyFrom(registo);
  }

  public copyFrom(registo?: ProjectViewModel): void {
    if (registo) {
      this.id = registo.id;
      this.name = registo.name;
      this.description = registo.description;
      this.language1Id = registo.language1Id;
      this.language1Name = registo.language1Name;
      this.language2Id = registo.language2Id;
      this.language2Name = registo.language2Name;
      this.active = registo.active;
      this.userCreationId = registo.userCreationId;
      this.dateCreation = registo.dateCreation;
      this.userChangeId = registo.userChangeId;
      this.dateChange = registo.dateChange;
      this.projectUsers = registo.projectUsers ? registo.projectUsers.map(x => new ProjectUserViewModel(x)) : [];
      this.countSentencesL1 = registo.countSentencesL1;
      this.countSentencesL1WithTranslation = registo.countSentencesL1WithTranslation;
    }
  }
}
