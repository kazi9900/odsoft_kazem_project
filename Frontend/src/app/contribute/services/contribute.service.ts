import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpService } from '../../core/services/http.service';
import { ILanguage } from '../../signin-signup/signup-form/viewmodels/interfaces/language';
import { IProficiencyLanguage } from '../../signin-signup/signup-form/viewmodels/interfaces/proficiencyLanguage';
import { IProject } from '../../signin-signup/signup-form/viewmodels/interfaces/project';
import { ILoadDados } from '../viewmodels/interfaces/loadDados';
import { ISentenceTranslations } from '../viewmodels/interfaces/sentenceTranslations';
import { ITranslationExport } from '../viewmodels/interfaces/translationExport';
import { ITranslationLike } from '../viewmodels/interfaces/translationLike';
import { SentenceViewModel } from '../viewmodels/sentenceViewModel';
import { TranslationViewModel } from '../viewmodels/translationViewModel';
import { UserProjectViewModel } from '../viewmodels/userProjectViewModel';

@Injectable()
export class ContributeService {
  private url = 'Contribute/';

  public languagesList: ILanguage[] = [];
  public projectsList: IProject[] = [];

  public loadDadosCompleted: boolean = false;

  public sentenceSelect: SentenceViewModel = null;
  public projectControl: FormControl = new FormControl({ value: null, disabled: true });
  public fileImportControl: FormControl = new FormControl(null);

  public languagesL2Control: FormControl = new FormControl([]);

  constructor(private httpService: HttpService) { }

  public loadDados(): Observable<ILoadDados> {
    if (this.loadDadosCompleted) {
      return of({
        projects: this.projectsList,
        languages: this.languagesList,
      } as ILoadDados);
    }

    return this.httpService.get<ILoadDados>(this.url + 'loadDados')
      .pipe(map((response: ILoadDados) => {
        if (response) {
          this.projectsList = response.projects || [];
          this.languagesList = response.languages || [];
        }

        this.loadDadosCompleted = true;

        return response;
      }));
  }

  public getSentencesByLanguagueId(languagueId: number): Observable<SentenceViewModel[]> {
    return this.httpService.get<SentenceViewModel[]>(this.url + 'sentences/' + languagueId);
  }

  public insertTranslation(translation: TranslationViewModel): Observable<SentenceViewModel> {
    const body = JSON.stringify(translation);

    return this.httpService.post<SentenceViewModel>(this.url + 'translation', body);
  }

  public updateTranslation(translation: TranslationViewModel): Observable<SentenceViewModel> {
    const body = JSON.stringify(translation);

    return this.httpService.put<SentenceViewModel>(this.url + 'translation', body);
  }

  public deleteTranslation(translationId: number, sentenceId: number): Observable<SentenceViewModel> {
    return this.httpService.delete<SentenceViewModel>(this.url + 'translation/' + translationId + '/' + sentenceId);
  }

  public insertProficiencyLanguage(profeciencyLanguage: IProficiencyLanguage): Observable<IProficiencyLanguage> {
    const body = JSON.stringify(profeciencyLanguage);

    return this.httpService.post<IProficiencyLanguage>(this.url + 'proficiencyLanguage', body);
  }

  public insertTranslationLike(translationLike: ITranslationLike): Observable<ITranslationLike> {
    const body = JSON.stringify(translationLike);

    return this.httpService.post<ITranslationLike>(this.url + 'translationlike', body);
  }

  public insertSentences(sentences: SentenceViewModel[]): Observable<SentenceViewModel[]> {
    const body = JSON.stringify(sentences);

    return this.httpService.post<SentenceViewModel[]>(this.url + 'sentences', body)
      .pipe(map((response: SentenceViewModel[]) => {
        return response.map(x => new SentenceViewModel(x));
      }));
  }

  public insertUserProject(userProject: UserProjectViewModel): Observable<UserProjectViewModel> {
    const body = JSON.stringify(userProject);

    return this.httpService.post<UserProjectViewModel>(this.url + 'projectuser', body)
      .pipe(map((response: UserProjectViewModel) => {
        return new UserProjectViewModel(response);
      }));
  }

  public updateTranslationLike(translationLike: ITranslationLike): Observable<ITranslationLike> {
    const body = JSON.stringify(translationLike);

    return this.httpService.put<ITranslationLike>(this.url + 'translationlike', body);
  }

  public getSentecesWithLastTranslation(l1: number, l2: number, projectId?: number): Observable<SentenceViewModel[]> {
    return this.httpService.get<SentenceViewModel[]>(this.url + 'translations/' + l1 + '/' + l2 + '/' + (projectId ? projectId : 0));
  }

  public getTranslationsFromLanguageAndProject(l1: number, projectId?: number): Observable<ISentenceTranslations[]> {
    return this.httpService.get<ISentenceTranslations[]>(this.url + 'translations/' + l1 + '/' + (projectId ? projectId : 0));
  }

  public getTranslationsFromLanguage1ToLanguage2AndProject(l1: number, l2: number, projectId?: number): Observable<ITranslationExport[]> {
    return this.httpService
      .get<ITranslationExport[]>(this.url + 'translationstoexport/' + l1 + '/' + l2 + '/' + (projectId ? projectId : 0));
  }

  public getUserProjects(userId: number): Observable<UserProjectViewModel[]> {
    return this.httpService.get<UserProjectViewModel[]>(this.url + 'userprojects/' + userId)
      .pipe(map((response: UserProjectViewModel[]) => {
        return response.map(x => new UserProjectViewModel(x));
      }));
  }
}
