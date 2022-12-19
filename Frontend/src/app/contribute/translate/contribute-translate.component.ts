import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { VirtualScrollerComponent } from 'ngx-virtual-scroller';
import { merge } from 'rxjs';
import { CredentialsService } from '../../core/services/credentials.service';
import { BaseComponent } from '../../shared/baseComponent';
import { ILanguage } from '../../signin-signup/signup-form/viewmodels/interfaces/language';
import { IProficiencyLanguage } from '../../signin-signup/signup-form/viewmodels/interfaces/proficiencyLanguage';
import { ContributeService } from '../services/contribute.service';
import { SentenceViewModel } from '../viewmodels/sentenceViewModel';

@UntilDestroy()
@Component({
  selector: 'app-contribute-translate',
  templateUrl: './contribute-translate.component.html',
  styleUrls: ['./contribute-translate.component.scss']
})
export class ContributeTranslateComponent extends BaseComponent implements OnDestroy {
  @ViewChild(VirtualScrollerComponent) public virtualScroll: VirtualScrollerComponent;
  @ViewChild('fileInput') fileInput: ElementRef;

  public language1Control: FormControl = new FormControl(null);
  public language2Control: FormControl = new FormControl(null);

  public searchSentenceL1Control: FormControl = new FormControl({ value: '', disabled: true });
  public searchSentenceL2Control: FormControl = new FormControl({ value: '', disabled: true });

  public listSentencesSpokenLanguage: SentenceViewModel[] = [];

  public popupVisible: boolean = false;

  public popupFileImportVisible: boolean = false;
  public sentencesToImport: SentenceViewModel[] = [];

  public languageMissingLevelProficiency: ILanguage = null;
  public proficiencyLanguage: IProficiencyLanguage = null;

  constructor(public router: Router,
    public credencialsService: CredentialsService,
    public contributeService: ContributeService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private translateService: TranslateService) {
    super();
    this.listenEventEmitters();
  }

  public ngOnDestroy(): void {
    this.contributeService.projectControl.setValue(null, { emitEvent: false });
    this.contributeService.projectControl.enable({ emitEvent: false });
    this.contributeService.sentenceSelect = null;
    this.spinner.hide();
  }

  public onCancel(): void {
    this.popupFileImportVisible = false;
    this.sentencesToImport = [];
    this.contributeService.fileImportControl.setValue(null, { emitEvent: false });
  }

  public onSave(): void {
    this.incrementIsBusy();
    this.contributeService.insertSentences(this.sentencesToImport)
      .pipe(untilDestroyed(this))
      .subscribe((response: SentenceViewModel[]) => {
        this.popupFileImportVisible = false;
        this.sentencesToImport = [];
        this.listSentencesSpokenLanguage.push(...response);
        this.listSentencesSpokenLanguage = this.listSentencesSpokenLanguage.slice();
        this.contributeService.fileImportControl.setValue(null, { emitEvent: false });
      }, () => {
        this.toastr.error(this.translateService.instant('ContributeService.Message.ErrorSavingSenteces'));
        this.decrementIsBusy();
      });
  }

  public showButtonImport(): boolean {
    if (this.router.url.includes('contribute/translate') &&
      this.contributeService.projectControl.value &&
      this.credencialsService.currentUser &&
      this.credencialsService.currentUser.userProjects &&
      this.credencialsService.currentUser.userProjects
        .some(x => x.projectId === this.contributeService.projectControl.value && x.isProjectOwner)) {

      return true;
    }

    return false;
  }

  public onLoadTranslations(): void {
    if (this.language1Control.value && this.language2Control.value) {
      this.spinner.show();
      this.searchSentenceL1Control.enable({ emitEvent: false });
      this.searchSentenceL2Control.enable({ emitEvent: false });
      this.incrementIsBusy();
      this.contributeService.getSentecesWithLastTranslation(
        this.language1Control.value, this.language2Control.value, this.contributeService.projectControl.value)
        .pipe(untilDestroyed(this))
        .subscribe((response: SentenceViewModel[]) => {
          this.decrementIsBusy();
          this.listSentencesSpokenLanguage = response.map(x => new SentenceViewModel(x));
          this.spinner.hide();
        },
          () => {
            this.decrementIsBusy();
            this.spinner.hide();
            this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorLoadingSentences'));
          });
    } else {
      this.searchSentenceL1Control.disable({ emitEvent: false });
      this.searchSentenceL2Control.disable({ emitEvent: false });
      this.searchSentenceL1Control.setValue('', { emitEvent: false });
      this.searchSentenceL2Control.setValue('', { emitEvent: false });
      this.listSentencesSpokenLanguage = [];
    }
  }

  public onCheckLevelProfeciencyAndLoadTranslations(): void {
    if (this.credencialsService.isAuthenticated()) {
      if (this.language1Control.value &&
        !this.credencialsService.currentUser.proficiencyLanguages.some(x => x.languageId === this.language1Control.value)) {
        this.openPopupMissingLevelProficiency(this.language1Control.value);
        return;
      }

      if (this.language2Control.value &&
        !this.credencialsService.currentUser.proficiencyLanguages.some(x => x.languageId === this.language2Control.value)) {
        this.openPopupMissingLevelProficiency(this.language2Control.value);
        return;
      }
    }

    this.onLoadTranslations();
  }

  private openPopupMissingLevelProficiency(languageId: number): void {
    this.languageMissingLevelProficiency = this.contributeService.languagesList.find(x => x.id === languageId);
    this.proficiencyLanguage = {
      languageId,
      userId: this.credencialsService.getCredentials.id,
      levelProficiency: 0
    } as IProficiencyLanguage;
    this.popupVisible = true;
  }

  public onHiddenPopup(): void {
    if (this.proficiencyLanguage) {
      if (this.proficiencyLanguage.languageId === this.language1Control.value) {
        this.language1Control.setValue(null, { emitEvent: false });
      }

      if (this.proficiencyLanguage.languageId === this.language2Control.value) {
        this.language2Control.setValue(null, { emitEvent: false });
      }

      if (this.contributeService.projectControl.value) {
        this.contributeService.projectControl.setValue(null);
      }

      this.proficiencyLanguage = null;
      this.languageMissingLevelProficiency = null;
    }
  }

  public saveLanguageProficiency(): void {
    if (this.proficiencyLanguage) {
      this.contributeService.insertProficiencyLanguage(this.proficiencyLanguage)
        .pipe(untilDestroyed(this))
        .subscribe((response: IProficiencyLanguage) => {
          if (response) {
            this.credencialsService.currentUser.proficiencyLanguages.push(response);
            this.proficiencyLanguage = null;
            this.popupVisible = null;
            this.languageMissingLevelProficiency = null;
            this.onCheckLevelProfeciencyAndLoadTranslations();
          }
        },
          () => {
            this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorSavingLanguageProficiency'));
          });
    }
  }

  public onClickNewLine(): void {
    const newRegistoSentence = new SentenceViewModel();
    newRegistoSentence.languageId = this.language1Control.value;
    newRegistoSentence.text = '';

    newRegistoSentence.lastSentenceTranslation = new SentenceViewModel();
    newRegistoSentence.lastSentenceTranslation.languageId = this.language2Control.value;
    newRegistoSentence.lastSentenceTranslation.text = '';

    this.listSentencesSpokenLanguage.unshift(newRegistoSentence);
    this.listSentencesSpokenLanguage = this.listSentencesSpokenLanguage.slice();
    this.contributeService.sentenceSelect = newRegistoSentence;
    this.searchSentenceL1Control.disable({ emitEvent: false });
    this.searchSentenceL2Control.disable({ emitEvent: false });
    this.contributeService.projectControl.disable({ emitEvent: false });

    setTimeout(() => {
      this.virtualScroll.scrollToIndex(0);
    }, 250);
  }

  public onDeleteItem(translation: SentenceViewModel): void {
    if (translation && !translation.id) {
      const index = this.listSentencesSpokenLanguage.indexOf(translation);
      if (index !== -1) {
        this.listSentencesSpokenLanguage.splice(index, 1);
      }
    }
    this.listSentencesSpokenLanguage = this.listSentencesSpokenLanguage.slice();
  }

  public removeLanguage([languagesList, languageId]: [ILanguage[], number | null]): ILanguage[] {
    if (languagesList) {
      return languagesList.filter(x => x.id !== languageId);
    }

    return [];
  }

  public filterListSentencesSpokenLanguage(): SentenceViewModel[] {
    if (!this.listSentencesSpokenLanguage) {
      return [];
    }

    const l1Search = this.searchSentenceL1Control.value.trim();
    const l2Search = this.searchSentenceL2Control.value.trim();

    return this.listSentencesSpokenLanguage.filter(x => (l1Search.length === 0 || !x.id || x.text.includes(l1Search)) &&
      (l2Search.length === 0 || (x.lastSentenceTranslation &&
        (!x.lastSentenceTranslation.id || x.lastSentenceTranslation.text.includes(l2Search)))));
  }

  private listenEventEmitters(): void {
    this.contributeService.projectControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value) => {
        if (value) {
          const project = this.contributeService.projectsList.find(x => x.id === value);
          this.language1Control.setValue(project.language1Id, { emitEvent: false });
          this.language2Control.setValue(project.language2Id, { emitEvent: false });
          this.language1Control.disable({ emitEvent: false });
          this.language2Control.disable({ emitEvent: false });
          this.onCheckLevelProfeciencyAndLoadTranslations();
        } else {
          this.language1Control.setValue(null, { emitEvent: false });
          this.language2Control.setValue(null, { emitEvent: false });
          this.language1Control.enable({ emitEvent: false });
          this.language2Control.enable({ emitEvent: false });
          this.onCheckLevelProfeciencyAndLoadTranslations();
        }
      });

    merge(
      this.language1Control.valueChanges,
      this.language2Control.valueChanges
    ).pipe(untilDestroyed(this))
      .subscribe((value) => {
        this.onCheckLevelProfeciencyAndLoadTranslations();
      });

    this.contributeService.fileImportControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value: string) => {
        if (value) {

          if (value.match('\.txt$')) {
            const reader = new FileReader();

            reader.onload = () => {
              this.sentencesToImport = reader.result.toString().split('\n')
                .filter(x => x.trim().length > 0)
                .map(x => {
                  const newSentence = new SentenceViewModel();
                  newSentence.languageId = this.language1Control.value;
                  newSentence.projectId = this.contributeService.projectControl.value;
                  newSentence.text = x.trim();
                  newSentence.userCreationId = this.credencialsService.getCredentials.id;
                  newSentence.userChangeId = this.credencialsService.getCredentials.id;
                  return newSentence;
                });

              this.popupFileImportVisible = true;
            };

            reader.onerror = () => {
              console.log(reader.error);
              this.toastr.error('Error in reading file');
            };

            reader.readAsText(this.fileInput.nativeElement.files[0], 'ASCII');

          } else {
            this.toastr.error('File is not valid');
            this.contributeService.fileImportControl.setValue(null, { emitEvent: false });
          }
        }
      });

  }
}
