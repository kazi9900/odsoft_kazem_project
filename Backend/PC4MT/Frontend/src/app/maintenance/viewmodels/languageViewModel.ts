export class LanguageViewModel {
  public id: number | null;
  public name: string;
  public abbreviation: string;
  public type: number;

  constructor(registo?: LanguageViewModel) {
    this.copyFrom(registo);
  }

  public copyFrom(registo?: LanguageViewModel): void {
    if (registo) {
      this.id = registo.id;
      this.name = registo.name;
      this.abbreviation = registo.abbreviation;
      this.type = registo.type;
    }
  }
}
