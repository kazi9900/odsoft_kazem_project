import { SentenceViewModel } from './sentenceViewModel';

export class TranslationViewModel {
  public id: number;
  public sentenceSpokenId: number;
  public sentenceSignId: number;
  public userCreationId: number;
  public dateCreation: Date;
  public userChangeId: number;
  public dateChange: Date;

  public sentenceSpoken: SentenceViewModel;
  public sentenceSign: SentenceViewModel;

  constructor(registo?: TranslationViewModel) {
    this.copyFrom(registo);
  }

  public copyFrom(registo?: TranslationViewModel): void {
    if (registo) {
      this.sentenceSpokenId = registo.sentenceSpokenId;
      this.sentenceSignId = registo.sentenceSignId;
      this.userCreationId = registo.userCreationId;
      this.dateCreation = registo.dateCreation;
      this.userChangeId = registo.userChangeId;
      this.dateChange = registo.dateChange;

      if (registo.sentenceSpoken) {
        this.sentenceSpoken = new SentenceViewModel(registo.sentenceSpoken);
      }

      if (registo.sentenceSign) {
        this.sentenceSign = new SentenceViewModel(registo.sentenceSign);
      }
    }
  }
}
