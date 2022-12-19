import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { merge } from 'rxjs';

import { CredentialsService } from '../../core/services/credentials.service';
import { NotificationService } from '../../core/services/notification.service';
import { BaseComponent } from '../../shared/baseComponent';
import { ILanguage } from '../../signin-signup/signup-form/viewmodels/interfaces/language';
import { ContributeService } from '../services/contribute.service';
import { ISentenceTranslations } from '../viewmodels/interfaces/sentenceTranslations';
import { ITranslationLike } from '../viewmodels/interfaces/translationLike';

@UntilDestroy()
@Component({
  selector: 'app-contribute-search',
  templateUrl: './contribute-search.component.html',
  styleUrls: ['./contribute-search.component.scss']
})
export class ContributeSearchComponent extends BaseComponent implements OnInit, OnDestroy {
  public language1Control: FormControl = new FormControl(null);
  public searchSentenceL1Control: FormControl = new FormControl('');
  public searchSentenceL2Control: FormControl = new FormControl('');

  public listSearch: ISentenceTranslations[] = [];

  constructor(public credencialsService: CredentialsService,
    public contributeService: ContributeService,
    private notificationService: NotificationService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private translateService: TranslateService) {
    super();

    this.listenEventEmitters();
    this.receiveNotifications();
  }

  public ngOnInit(): void {
    this.contributeService.languagesL2Control = new FormControl([]);
    this.contributeService.languagesL2Control.disable({ emitEvent: false });
    this.searchSentenceL1Control.disable({ emitEvent: false });
    this.searchSentenceL2Control.disable({ emitEvent: false });

    merge(
      this.language1Control.valueChanges,
      this.contributeService.projectControl.valueChanges
    )
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        if (this.language1Control.value) {
          this.contributeService.languagesL2Control.enable({ emitEvent: false });
          this.searchSentenceL1Control.enable({ emitEvent: false });
          this.searchSentenceL2Control.enable({ emitEvent: false });

          this.spinner.show();
          this.incrementIsBusy();
          this.contributeService
            .getTranslationsFromLanguageAndProject(this.language1Control.value, this.contributeService.projectControl.value)
            .pipe(untilDestroyed(this))
            .subscribe((response: ISentenceTranslations[]) => {
              this.listSearch = response;

              this.spinner.hide();
              this.decrementIsBusy();
            }, () => {
              this.decrementIsBusy();
              this.spinner.hide();
              this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorLoadingTranslations'));
            });

        } else {
          this.contributeService.languagesL2Control.setValue([], { emitEvent: false });
          this.contributeService.languagesL2Control.disable({ emitEvent: false });
          this.searchSentenceL1Control.disable({ emitEvent: false });
          this.searchSentenceL1Control.setValue('', { emitEvent: false });
          this.searchSentenceL2Control.disable({ emitEvent: false });
          this.searchSentenceL2Control.setValue('', { emitEvent: false });
          this.listSearch = [];
        }
      });
  }

  public ngOnDestroy(): void {
    this.contributeService.projectControl.setValue(null, { emitEvent: false });
    this.contributeService.projectControl.enable({ emitEvent: false });
    this.spinner.hide();
  }

  public filtrarLista(): ISentenceTranslations[] {
    if (!this.listSearch) {
      return [];
    }

    if (this.searchSentenceL1Control.value.trim().length === 0 && this.searchSentenceL2Control.value.trim().length === 0 &&
      this.contributeService.languagesL2Control.value.length === 0) {
      return this.listSearch;
    }

    return this.listSearch
      .filter(x => (this.searchSentenceL1Control.value.trim().length === 0 ||
        x.sentence.text.includes(this.searchSentenceL1Control.value.trim())) &&
        ((this.contributeService.languagesL2Control.value.length === 0 && this.searchSentenceL2Control.value.trim().length === 0) ||
          x.translations
            .filter(t => (this.contributeService.languagesL2Control.value.length === 0 ||
              this.contributeService.languagesL2Control.value.includes(t.sentenceL2.languageId)) &&
              t.sentenceL2.text.includes(this.searchSentenceL2Control.value.trim())).length > 0));
  }

  public removeLanguage1([listLanguage, language1]: [ILanguage[], number]): ILanguage[] {
    if (!language1) {
      return listLanguage;
    }

    if (!listLanguage) {
      return [];
    }

    return listLanguage.filter(x => x.id !== language1);
  }

  private listenEventEmitters(): void {
    this.contributeService.projectControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value) => {
        if (value) {
          const project = this.contributeService.projectsList.find(x => x.id === value);
          this.language1Control.setValue(project.language1Id, { emitEvent: false });
          this.language1Control.disable();
          this.contributeService.languagesL2Control.setValue([project.language2Id], { emitEvent: false });

        } else {
          this.language1Control.setValue(null, { emitEvent: false });
          this.language1Control.enable();
          this.contributeService.languagesL2Control.setValue([], { emitEvent: false });
        }
      });
  }

  private receiveNotifications(): void {
    this.notificationService.translationLikeAdded
      .pipe(untilDestroyed(this))
      .subscribe((data: ITranslationLike) => {
        this.listSearch.forEach(x => {
          const translation = x.translations.find(y => y.id === data.translationId);
          if (translation) {
            translation.translationLikes.push(data);
            translation.translationLikes = translation.translationLikes.slice();
          }
        });
      });

    this.notificationService.translationLikeUpdated
      .pipe(untilDestroyed(this))
      .subscribe((data: ITranslationLike) => {
        this.listSearch.forEach(x => {
          const translation = x.translations.find(y => y.id === data.translationId);
          if (translation) {
            const translationLike = translation.translationLikes.find(y => y.userId === data.userId);

            if (translationLike) {
              translationLike.like = data.like;
              translation.translationLikes = translation.translationLikes.slice();
            }
          }
        });
      });
  }
}
