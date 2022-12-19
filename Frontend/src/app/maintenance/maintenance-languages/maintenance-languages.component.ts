import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from '../../shared/baseComponent';
import { MaintenanceService } from '../services/maintenance.service';
import { ITypeLanguage } from '../viewmodels/interfaces/typeLanguage';
import { LanguageViewModel } from '../viewmodels/languageViewModel';

@UntilDestroy()
@Component({
  selector: 'app-maintenance-languages',
  templateUrl: './maintenance-languages.component.html',
  styleUrls: ['./maintenance-languages.component.scss']
})
export class MaintenanceLanguagesComponent extends BaseComponent implements OnInit, OnDestroy {
  public listLanguages: LanguageViewModel[];

  public currentLanguage: LanguageViewModel = null;

  public popupVisible: boolean = false;

  public form: FormGroup;
  public isFormSubmitted: boolean = false;

  public typesLanguage: ITypeLanguage[] = [
    { id: 1, descr: 'Spoken Language' },
    { id: 2, descr: 'Sign Language' }
  ];

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private maintenanceService: MaintenanceService,
    private spinner: NgxSpinnerService) {
    super();
  }

  public ngOnInit(): void {
    this.loadRegistos();
  }

  public ngOnDestroy(): void {
    this.spinner.hide();
  }

  public onAddLanguage(): void {
    const newLanguage = new LanguageViewModel();
    this.onSelectItem(newLanguage);
  }

  public onSelectItem(language: LanguageViewModel): void {
    this.isFormSubmitted = false;
    this.currentLanguage = language;
    this.initializeForm();
    this.popupVisible = true;
  }

  public onCancel(): void {
    this.popupVisible = false;
    this.form = null;
    this.currentLanguage = null;
  }

  public onSave(): void {
    this.isFormSubmitted = true;

    if (this.form && this.form.valid) {
      const registo = new LanguageViewModel();
      registo.id = this.form.get('id').value;
      registo.name = this.form.get('name').value;
      registo.abbreviation = this.form.get('abbreviation').value;
      registo.type = this.form.get('type').value;

      if (this.currentLanguage && this.currentLanguage.id) { // UPDATE
        this.incrementIsBusy();
        this.maintenanceService.updateLanguage(registo)
          .pipe(untilDestroyed(this))
          .subscribe((response: LanguageViewModel) => {
            this.currentLanguage.copyFrom(response);
            this.popupVisible = false;
            this.form = null;
            this.currentLanguage = null;
            this.decrementIsBusy();
          }, () => {
            this.decrementIsBusy();
            this.toastr.error('Erro ao atualizar a língua');
          });

      } else { // INSERT
        this.incrementIsBusy();
        this.maintenanceService.insertLanguage(registo)
          .pipe(untilDestroyed(this))
          .subscribe((response: LanguageViewModel) => {
            this.currentLanguage = new LanguageViewModel(response);
            this.listLanguages.push(this.currentLanguage);
            this.popupVisible = false;
            this.form = null;
            this.currentLanguage = null;
            this.decrementIsBusy();
          }, () => {
            this.decrementIsBusy();
            this.toastr.error('Erro ao inserir nova língua');
          });
      }
    }
  }

  public getTypeLanguageDescr(id: number): string {
    const typeLanguage = this.typesLanguage.find(x => x.id === id);
    return typeLanguage ? typeLanguage.descr : '';
  }

  private loadRegistos(): void {
    this.spinner.show();
    this.incrementIsBusy();
    this.maintenanceService.getLanguages()
      .pipe(untilDestroyed(this))
      .subscribe((response: LanguageViewModel[]) => {
        this.listLanguages = response;
        this.decrementIsBusy();
        this.spinner.hide();
      }, () => {
        this.decrementIsBusy();
        this.spinner.hide();
        this.toastr.error('Erro ao carregar dados');
      });
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      id: [this.currentLanguage.id],
      name: [this.currentLanguage.name, [Validators.required]],
      abbreviation: [this.currentLanguage.abbreviation, [Validators.required]],
      type: [this.currentLanguage.type, [Validators.required]],
    });
  }
}
