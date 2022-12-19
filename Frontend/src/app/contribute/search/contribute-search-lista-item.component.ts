import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { CredentialsService } from '../../core/services/credentials.service';
import { NotificationService } from '../../core/services/notification.service';
import { BaseComponent } from '../../shared/baseComponent';
import { ContributeService } from '../services/contribute.service';
import { ISentenceTranslations } from '../viewmodels/interfaces/sentenceTranslations';
import { ITranslation } from '../viewmodels/interfaces/translation';
import { ITranslationLike } from '../viewmodels/interfaces/translationLike';

@UntilDestroy()
@Component({
  selector: 'app-contribute-search-lista-item',
  templateUrl: './contribute-search-lista-item.component.html',
  styleUrls: ['./contribute-search-lista-item.component.scss']
})
export class ContributeSearchListaItemComponent extends BaseComponent implements OnInit {
  @Input() public item: ISentenceTranslations;
  @Input() public searchSentenceL2: string = '';

  constructor(public contributeService: ContributeService,
    public credencialsService: CredentialsService,
    private notificationService: NotificationService) {
    super();
  }

  public ngOnInit(): void {

  }

  public hasLikeCurrentuser([translatioLikes, value]: [ITranslationLike[], boolean?]): boolean {
    if (!this.credencialsService.getCredentials) {
      return false;
    }

    return translatioLikes.some(x => x.like === value && x.userId === this.credencialsService.getCredentials.id);
  }

  public likeTranslation(translation: ITranslation): void {
    if (this.credencialsService.getCredentials) {
      const currentLikeUser = translation.translationLikes.find(x => x.userId === this.credencialsService.getCredentials.id);
      if (!currentLikeUser) {
        const newTranslationLike = {
          userId: this.credencialsService.getCredentials.id,
          translationId: translation.id,
          like: true
        } as ITranslationLike;

        this.contributeService.insertTranslationLike(newTranslationLike)
          .pipe(untilDestroyed(this))
          .subscribe((response: ITranslationLike) => {
            translation.translationLikes.push(response);
            translation.translationLikes = translation.translationLikes.slice();
            this.notificationService.sendTranslationLikeAdd(response);
          });

      } else {
        currentLikeUser.like = currentLikeUser.like ? null : true;
        this.contributeService.updateTranslationLike(currentLikeUser)
          .pipe(untilDestroyed(this))
          .subscribe((response: ITranslationLike) => {
            translation.translationLikes = translation.translationLikes.slice();
            this.notificationService.sendTranslationLikeUpdate(response);
          });
      }
    }
  }

  public dislikeTranslation(translation: ITranslation): void {
    if (this.credencialsService.getCredentials) {
      const currentLikeUser = translation.translationLikes.find(x => x.userId === this.credencialsService.getCredentials.id);
      if (!currentLikeUser) {
        const newTranslationLike = {
          userId: this.credencialsService.getCredentials.id,
          translationId: translation.id,
          like: false
        } as ITranslationLike;

        this.contributeService.insertTranslationLike(newTranslationLike)
          .pipe(untilDestroyed(this))
          .subscribe((response: ITranslationLike) => {
            translation.translationLikes.push(response);
            translation.translationLikes = translation.translationLikes.slice();
            this.notificationService.sendTranslationLikeAdd(response);
          });

      } else {
        currentLikeUser.like = currentLikeUser.like === false ? null : false;
        this.contributeService.updateTranslationLike(currentLikeUser)
          .pipe(untilDestroyed(this))
          .subscribe((response: ITranslationLike) => {
            translation.translationLikes = translation.translationLikes.slice();
            this.notificationService.sendTranslationLikeUpdate(response);
          });
      }
    }
  }

  public filterTranslations([translations, languagesL2, searchSentenceL2]: [ITranslation[], number[], string]): ITranslation[] {
    if (!translations) {
      return [];
    }

    if (languagesL2.length === 0 && searchSentenceL2.trim().length === 0) {
      return translations;
    }

    return translations
      .filter(x => (languagesL2.length === 0 || this.contributeService.languagesL2Control.value.includes(x.sentenceL2.languageId)) &&
        (searchSentenceL2.trim().length === 0 || x.sentenceL2.text.includes(searchSentenceL2.trim())));
  }

}
