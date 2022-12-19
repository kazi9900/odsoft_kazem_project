import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { BaseComponent } from '../../shared/baseComponent';
import { ILanguage } from '../../signin-signup/signup-form/viewmodels/interfaces/language';
import { ContributeService } from '../services/contribute.service';
import { ITranslationExport } from '../viewmodels/interfaces/translationExport';

@UntilDestroy()
@Component({
  selector: 'app-contribute-download',
  templateUrl: './contribute-download.component.html',
  styleUrls: ['./contribute-download.component.scss']
})
export class ContributeDownloadComponent extends BaseComponent implements OnInit, OnDestroy {
  public language1Control: FormControl = new FormControl(null);
  public language2Control: FormControl = new FormControl(null);
  public searchL1Control: FormControl = new FormControl('');
  public searchL2Control: FormControl = new FormControl('');

  public listTranslationsToExport: ITranslationExport[] = [];
  public listTranslationsToExportFiltered: ITranslationExport[] = [];

  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  };

  constructor(
    public contributeService: ContributeService,
    public translateService: TranslateService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) {
    super();
  }

  public ngOnInit(): void {
    this.searchL1Control.disable({ emitEvent: false });
    this.searchL2Control.disable({ emitEvent: false });

    merge(
      this.language1Control.valueChanges,
      this.language2Control.valueChanges
    )
      .pipe(debounceTime(300), untilDestroyed(this))
      .subscribe(() => {

        if (this.language1Control.value && this.language2Control.value) {
          this.searchL1Control.enable({ emitEvent: false });
          this.searchL2Control.enable({ emitEvent: false });

        } else {
          this.searchL1Control.setValue('', { emitEvent: false });
          this.searchL2Control.setValue('', { emitEvent: false });
          this.searchL1Control.disable({ emitEvent: false });
          this.searchL2Control.disable({ emitEvent: false });
        }

        this.loadRegistos();
      });

    merge(
      this.searchL1Control.valueChanges,
      this.searchL2Control.valueChanges
    )
      .pipe(debounceTime(300), untilDestroyed(this))
      .subscribe(() => {
        this.filterListTranslationsToExport();
      });

    this.listenEventEmitters();
  }

  public ngOnDestroy(): void {
    this.contributeService.projectControl.setValue(null, { emitEvent: false });
    this.contributeService.projectControl.enable({ emitEvent: false });
    this.spinner.hide();
  }

  public removeLanguage([languagesList, languageId]: [ILanguage[], number | null]): ILanguage[] {
    if (languagesList) {
      return languagesList.filter(x => x.id !== languageId);
    }

    return [];
  }

  public onExportFile(): void {
    const language1 = this.contributeService.languagesList.find(x => x.id === this.language1Control.value);
    const language2 = this.contributeService.languagesList.find(x => x.id === this.language2Control.value);

    const exportData = this.listTranslationsToExportFiltered.map(x => {
      const e = {};
      e[language1.name + ' - ' + language1.abbreviation] = x.sentenceL1;
      e[language2.name + ' - ' + language2.abbreviation] = x.sentenceL2;

      return e;
    });

    this.dyanmicDownloadByHtmlTag({
      fileName: 'Translations.json',
      fileType: 'text/json',
      text: JSON.stringify(exportData, null, '\t')
    });
  }

  private dyanmicDownloadByHtmlTag(arg: {
    fileName: string,
    fileType: string,
    text: string
  }): void {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    element.setAttribute('href', `data:${arg.fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
    element.setAttribute('download', arg.fileName);

    const event = new MouseEvent('click');
    element.dispatchEvent(event);
  }

  public loadRegistos(): void {
    if (this.language1Control.value && this.language2Control.value) {
      this.spinner.show();
      this.incrementIsBusy();
      this.contributeService
        .getTranslationsFromLanguage1ToLanguage2AndProject(this.language1Control.value,
          this.language2Control.value, this.contributeService.projectControl.value)
        .pipe(untilDestroyed(this))
        .subscribe((response: ITranslationExport[]) => {
          this.decrementIsBusy();
          this.listTranslationsToExport = response;
          this.filterListTranslationsToExport();
          this.spinner.hide();

        }, () => {
          this.decrementIsBusy();
          this.spinner.hide();
          this.toastr.error(this.translateService.instant('Shared.Message.ErrorLoading'));
        });

    } else {
      this.listTranslationsToExport = [];
      this.listTranslationsToExportFiltered = [];
    }
  }

  private filterListTranslationsToExport(): void {
    this.listTranslationsToExportFiltered = this.listTranslationsToExport
      .filter(x =>
        (this.searchL1Control.value.trim().length === 0 ||
          x.sentenceL1.toLowerCase().includes(this.searchL1Control.value.trim().toLowerCase())) &&
        (this.searchL2Control.value.trim().length === 0 ||
          x.sentenceL2.toLowerCase().includes(this.searchL2Control.value.trim().toLowerCase()))
      );
  }

  private listenEventEmitters(): void {
    this.contributeService.projectControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value) => {
        if (value) {
          const project = this.contributeService.projectsList.find(x => x.id === value);
          this.language1Control.setValue(project.language1Id, { emitEvent: false });
          this.language2Control.setValue(project.language2Id);
          this.language1Control.disable({ emitEvent: false });
          this.language2Control.disable({ emitEvent: false });
          this.searchL1Control.enable({ emitEvent: false });
          this.searchL2Control.enable({ emitEvent: false });

        } else {
          this.language1Control.setValue(null, { emitEvent: false });
          this.language2Control.setValue(null);
          this.language1Control.enable({ emitEvent: false });
          this.language2Control.enable({ emitEvent: false });
        }
      });
  }
}
