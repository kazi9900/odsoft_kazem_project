export class SentenceViewModel {
  public id: number;
  public text: string;
  public languageId: number;
  public projectId: number;
  public userCreationId: number;
  public dateCreation: Date;
  public userChangeId: number;
  public dateChange: Date;

  public countTranslations: number | null;
  public lastSentenceTranslationId: number | null;
  public lastSentenceTranslation: SentenceViewModel;

  constructor(registo?: SentenceViewModel) {
    this.copyFrom(registo);
  }

  public copyFrom(registo?: SentenceViewModel): void {
    if (registo) {
      this.id = registo.id;
      this.text = registo.text;
      this.languageId = registo.languageId;
      this.projectId = registo.projectId;
      this.userCreationId = registo.userCreationId;
      this.dateCreation = registo.dateCreation;
      this.userChangeId = registo.userChangeId;
      this.dateChange = registo.dateChange;

      this.countTranslations = registo.countTranslations;
      this.lastSentenceTranslationId = registo.lastSentenceTranslationId;
      this.lastSentenceTranslation = registo.lastSentenceTranslation ? new SentenceViewModel(registo.lastSentenceTranslation) : null;
    }
  }
}
