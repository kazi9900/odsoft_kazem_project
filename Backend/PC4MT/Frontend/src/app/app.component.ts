import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';

import { ContributeService } from './contribute/services/contribute.service';
import { DataService } from './core/services/data.service';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private contributeService: ContributeService,
    private dataService: DataService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private translateService: TranslateService) {

    this.translateService.use('pt');
  }

  public ngOnInit(): void {
    this.router.navigate(['']);
    this.loadDadosGeraisAndCurrentUser();
  }

  public ngOnDestroy(): void {
    this.spinner.hide('general');
  }

  private loadDadosGeraisAndCurrentUser(): void {
    this.spinner.show('general');
    forkJoin([
      this.contributeService.loadDados(),
      this.dataService.loadCurrentUser()
    ])
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.spinner.hide('general');
      }, () => {
        this.spinner.hide('general');
        this.toastr.error(this.translateService.instant('AppComponent.Message.ErrorLoadingGeneralData'));
      });
  }
}
