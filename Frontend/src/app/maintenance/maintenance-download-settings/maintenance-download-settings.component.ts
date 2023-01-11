import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from '../../shared/baseComponent';
import { MaintenanceService } from '../services/maintenance.service';
import { DownloadSettignsViewModel } from '../viewmodels/downloadSettingsViewModel';

@UntilDestroy()
@Component({
  selector: 'app-maintenance-download-settings',
  templateUrl: './maintenance-download-settings.component.html',
  styleUrls: ['./maintenance-download-settings.component.scss']
})
export class MaintenanceDownloadSettingsComponent extends BaseComponent implements OnInit, OnDestroy {
  public downloadSettings: DownloadSettignsViewModel;

  public popupVisible: boolean = false;

  public form: FormGroup;

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

  public onOpenPopupForm(): void {
    this.initializeForm();
    this.popupVisible = true;
  }

  public onCancel(): void {
    this.popupVisible = false;
    this.form = null;
  }

  public onSave(): void {
    if (this.form && this.form.valid) {
      const registo = new DownloadSettignsViewModel();
      registo.maxSentencesPerDownload = this.form.get('maxSentencesPerDownload').value;
      registo.maxSentencesPerUser = this.form.get('maxSentencesPerUser').value;
      registo.maxSentencesL1L2 = this.form.get('maxSentencesL1L2').value;
      registo.maxDownloadsPerUser = this.form.get('maxDownloadsPerUser').value;

      if (this.downloadSettings) { // UPDATE
        this.incrementIsBusy();
        this.maintenanceService.updateDownloadSettings(registo)
          .pipe(untilDestroyed(this))
          .subscribe((response: DownloadSettignsViewModel) => {
            this.downloadSettings.copyFrom(response);
            this.popupVisible = false;
            this.form = null;
            this.decrementIsBusy();
          }, () => {
            this.decrementIsBusy();
            this.toastr.error('Erro ao atualizar configurações de download');
          });

      } else { // INSERT
        this.incrementIsBusy();
        this.maintenanceService.insertDownloadSettings(registo)
          .pipe(untilDestroyed(this))
          .subscribe((response: DownloadSettignsViewModel) => {
            this.downloadSettings = new DownloadSettignsViewModel(response);
            this.popupVisible = false;
            this.form = null;
            this.decrementIsBusy();
          }, () => {
            this.decrementIsBusy();
            this.toastr.error('Erro ao inserir configurações de download');
          });
      }
    }
  }

  private loadRegistos(): void {
    this.spinner.show();
    this.incrementIsBusy();
    this.maintenanceService.getDownloadSettings()
      .pipe(untilDestroyed(this))
      .subscribe((response: DownloadSettignsViewModel) => {
        this.downloadSettings = response;
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
      maxSentencesPerDownload: [this.downloadSettings ? this.downloadSettings.maxSentencesPerDownload : null],
      maxSentencesPerUser: [this.downloadSettings ? this.downloadSettings.maxSentencesPerUser : null],
      maxSentencesL1L2: [this.downloadSettings ? this.downloadSettings.maxSentencesL1L2 : null],
      maxDownloadsPerUser: [this.downloadSettings ? this.downloadSettings.maxDownloadsPerUser : null],
    });
  }
}
