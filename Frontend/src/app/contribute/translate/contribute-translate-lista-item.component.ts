import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CredentialsService } from '../../core/services/credentials.service';
import { BaseComponent } from '../../shared/baseComponent';
import { ModeEnum } from '../../shared/helpers/modeEnum';
import { ContributeService } from '../services/contribute.service';
import { SentenceViewModel } from '../viewmodels/sentenceViewModel';
import { TranslationViewModel } from '../viewmodels/translationViewModel';
import { v4 as uuid } from 'uuid';
import { TranslateService } from '@ngx-translate/core';

@UntilDestroy()
@Component({
  selector: 'app-contribute-translate-lista-item',
  templateUrl: './contribute-translate-lista-item.component.html',
  styleUrls: ['./contribute-translate-lista-item.component.scss']
})
export class ContributeTranslateListaItemComponent extends BaseComponent implements OnInit, OnDestroy {
  @Input() public item: SentenceViewModel;
  @Input() public language1: number;
  @Input() public language2: number;
  @Input() public searchL1: FormControl;
  @Input() public searchL2: FormControl;

  @Output() public deleteItem: EventEmitter<SentenceViewModel> = new EventEmitter<SentenceViewModel>();

  public form: FormGroup;

  public isEditor: boolean = false;

  public id: string;

  private mode: ModeEnum;

  constructor(public contributeService: ContributeService,
    public credentialsService: CredentialsService,
    private formBuilder: FormBuilder,
    private ref: ChangeDetectorRef,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private translateService: TranslateService) {
    super();
  }

  public ngOnInit(): void {
    this.isEditor = this.credentialsService.isEditor();
    this.id = uuid();

    if (!this.item.text) {
      this.mode = ModeEnum.CREATE;
      this.form = this.formBuilder.group({
        textL1: ['', [Validators.required]],
        textL2: ['', this.isEditor ? [] : [Validators.required]]
      });
    }
  }

  public ngOnDestroy(): void {
    this.spinner.hide(this.id);
  }

  public onClickDeleteTranslation(): void {
    this.spinner.show(this.id);
    this.contributeService.deleteTranslation(this.item.lastSentenceTranslationId, this.item.id)
      .pipe(untilDestroyed(this))
      .subscribe((response: SentenceViewModel) => {
        this.item.copyFrom(new SentenceViewModel(response));
        this.ref.detectChanges();
        this.spinner.hide(this.id);
        this.toastr.success(this.translateService.instant('ContributeComponent.Message.TranslationSuccessfullyDeleted'));
      }, () => {
        this.spinner.hide(this.id);
        this.toastr.success(this.translateService.instant('ContributeComponent.Message.ErrorDeletingTranslation'));
      });
  }

  public onClickNewTranslation(): void {
    this.contributeService.sentenceSelect = this.item;
    this.searchL1.disable({ emitEvent: false });
    this.searchL2.disable({ emitEvent: false });
    this.contributeService.projectControl.disable({ emitEvent: false });
    this.mode = ModeEnum.ADD;
    this.initializeForm();
    this.ref.detectChanges();
  }

  public onClickEditTranslation(): void {
    this.contributeService.sentenceSelect = this.item;
    this.searchL1.disable({ emitEvent: false });
    this.searchL2.disable({ emitEvent: false });
    this.contributeService.projectControl.disable({ emitEvent: false });
    this.mode = ModeEnum.EDIT;
    this.initializeForm();
    this.ref.detectChanges();
  }

  public onCancel(): void {
    this.form = null;
    this.contributeService.sentenceSelect = null;
    this.searchL1.enable({ emitEvent: false });
    this.searchL2.enable({ emitEvent: false });
    this.contributeService.projectControl.enable({ emitEvent: false });

    if (this.mode === ModeEnum.CREATE) {
      this.deleteItem.emit(this.item);
    }

    this.mode = null;

    this.ref.detectChanges();
  }

  public onSave(): void {
    if (this.form.valid) {
      switch (this.mode) {
        case ModeEnum.ADD:
          this.insertTranslation();
          break;

        case ModeEnum.EDIT:
          this.updateTranslation();
          break;

        case ModeEnum.CREATE:
          if (this.form && this.form.get('textL2').value && this.form.get('textL2').value.trim().length > 0) {
            this.createTranslation();

          } else {
            this.createSentence();
          }
          break;
      }

    } else {
      this.toastr.warning(this.translateService.instant('ContributeComponent.Message.InvalidText'));
    }
  }

  public updateTranslation(): void {

    const translation = new TranslationViewModel();
    translation.id = this.item.lastSentenceTranslationId;
    translation.sentenceSpoken = new SentenceViewModel(this.item);
    translation.sentenceSpoken.lastSentenceTranslation = null;
    translation.sentenceSpokenId = this.item.id;
    translation.sentenceSign = new SentenceViewModel(this.item.lastSentenceTranslation);
    translation.sentenceSignId = this.item.lastSentenceTranslation.id;
    translation.sentenceSign.text = this.form.controls.text.value;

    if (this.credentialsService.isAuthenticated()) {
      translation.userChangeId = this.credentialsService.getCredentials.id;
      translation.sentenceSign.userChangeId = this.credentialsService.getCredentials.id;
    }

    this.spinner.show(this.id);
    this.contributeService.updateTranslation(translation)
      .pipe(untilDestroyed(this))
      .subscribe((response: SentenceViewModel) => {
        this.item.copyFrom(new SentenceViewModel(response));
        this.form = null;
        this.contributeService.sentenceSelect = null;
        this.mode = null;
        this.searchL1.enable({ emitEvent: false });
        this.searchL2.enable({ emitEvent: false });
        this.contributeService.projectControl.enable({ emitEvent: false });
        this.spinner.hide(this.id);
        this.toastr.success(this.translateService.instant('ContributeComponent.Message.TranslationUpdatedSuccessfully'));
      }, () => {
        this.spinner.hide(this.id);
        this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorUpdatingTranslation'));
      });
  }

  public insertTranslation(): void {
    const newSentenceL2 = new SentenceViewModel();
    newSentenceL2.languageId = this.language2;
    newSentenceL2.text = this.form.controls.text.value;
    newSentenceL2.projectId = this.contributeService.projectControl.value;

    const newTranslation = new TranslationViewModel();
    newTranslation.sentenceSpoken = this.item;
    newTranslation.sentenceSpokenId = this.item.id;
    newTranslation.sentenceSign = newSentenceL2;

    if (this.credentialsService.isAuthenticated()) {
      newSentenceL2.userCreationId = this.credentialsService.getCredentials.id;
      newSentenceL2.userChangeId = this.credentialsService.getCredentials.id;
      newTranslation.userCreationId = this.credentialsService.getCredentials.id;
      newTranslation.userChangeId = this.credentialsService.getCredentials.id;
    }

    this.spinner.show(this.id);
    this.contributeService.insertTranslation(newTranslation)
      .pipe(untilDestroyed(this))
      .subscribe((response: SentenceViewModel) => {
        this.item.copyFrom(new SentenceViewModel(response));
        this.form = null;
        this.contributeService.sentenceSelect = null;
        this.mode = null;
        this.searchL1.enable({ emitEvent: false });
        this.searchL2.enable({ emitEvent: false });
        this.contributeService.projectControl.enable({ emitEvent: false });
        this.spinner.hide(this.id);
        this.toastr.success(this.translateService.instant('ContributeComponent.Message.TranslationInsertedSuccessfully'));
      }, () => {
        this.spinner.hide(this.id);
        this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorInsertingTranslation'));
      });
  }

  public createTranslation(): void {
    if (this.form && this.form.valid) {
      const newSentenceL1 = new SentenceViewModel();
      newSentenceL1.id = null;
      newSentenceL1.languageId = this.item.languageId;
      newSentenceL1.text = this.form.get('textL1').value;
      newSentenceL1.projectId = this.contributeService.projectControl.value;

      const newSentenceL2 = new SentenceViewModel();
      newSentenceL2.id = null;
      newSentenceL2.languageId = this.item.lastSentenceTranslation.languageId;
      newSentenceL2.text = this.form.get('textL2').value;
      newSentenceL2.projectId = this.contributeService.projectControl.value;

      const newTranslation = new TranslationViewModel();
      newTranslation.sentenceSpoken = newSentenceL1;
      newTranslation.sentenceSign = newSentenceL2;

      if (this.credentialsService.isAuthenticated()) {
        newSentenceL1.userCreationId = this.credentialsService.getCredentials.id;
        newSentenceL1.userChangeId = this.credentialsService.getCredentials.id;
        newSentenceL2.userCreationId = this.credentialsService.getCredentials.id;
        newSentenceL2.userChangeId = this.credentialsService.getCredentials.id;
        newTranslation.userCreationId = this.credentialsService.getCredentials.id;
        newTranslation.userChangeId = this.credentialsService.getCredentials.id;
      }

      this.spinner.show(this.id);
      this.contributeService.insertTranslation(newTranslation)
        .pipe(untilDestroyed(this))
        .subscribe((response: SentenceViewModel) => {
          this.item.copyFrom(new SentenceViewModel(response));
          this.form = null;
          this.contributeService.sentenceSelect = null;
          this.mode = null;
          this.searchL1.enable({ emitEvent: false });
          this.searchL2.enable({ emitEvent: false });
          this.contributeService.projectControl.enable({ emitEvent: false });
          this.deleteItem.emit(null);
          this.spinner.hide(this.id);
          this.toastr.success(this.translateService.instant('ContributeComponent.Message.TranslationInsertedSuccessfully'));

        }, () => {
          this.spinner.hide(this.id);
          this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorInsertingTranslation'));
        });
    }
  }

  public createSentence(): void {
    if (this.form && this.form.valid) {
      const newSentenceL1 = new SentenceViewModel();
      newSentenceL1.id = null;
      newSentenceL1.languageId = this.item.languageId;
      newSentenceL1.text = this.form.get('textL1').value;
      newSentenceL1.projectId = this.contributeService.projectControl.value;

      if (this.credentialsService.isAuthenticated()) {
        newSentenceL1.userCreationId = this.credentialsService.getCredentials.id;
        newSentenceL1.userChangeId = this.credentialsService.getCredentials.id;
      }

      this.spinner.show(this.id);
      this.contributeService.insertSentences([newSentenceL1])
        .pipe(untilDestroyed(this))
        .subscribe((response: SentenceViewModel[]) => {
          this.item.copyFrom(new SentenceViewModel(response[0]));
          this.form = null;
          this.contributeService.sentenceSelect = null;
          this.mode = null;
          this.searchL1.enable({ emitEvent: false });
          this.searchL2.enable({ emitEvent: false });
          this.contributeService.projectControl.enable({ emitEvent: false });
          this.deleteItem.emit(null);
          this.spinner.hide(this.id);
          this.toastr.success(this.translateService.instant('ContributeComponent.Message.SentenceInsertedSuccessfully'));
        }, () => {
          this.spinner.hide(this.id);
          this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorInsertingSentence'));
        });
    }
  }

  public initializeForm(): void {
    this.form = this.formBuilder.group({
      text: [this.mode === ModeEnum.ADD ? '' : this.item.lastSentenceTranslation.text, [Validators.required]]
    });
  }
}
