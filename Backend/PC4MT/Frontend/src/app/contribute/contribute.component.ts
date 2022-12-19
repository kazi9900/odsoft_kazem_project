import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { forkJoin, of } from 'rxjs';
import { CredentialsService } from '../core/services/credentials.service';
import { BaseComponent } from '../shared/baseComponent';
import { UserViewModel } from '../signin-signup/signin-form/viewmodels/userViewModel';
import { SignUpService } from '../signin-signup/signup-form/services/signup.service';
import { IProject } from '../signin-signup/signup-form/viewmodels/interfaces/project';
import { ContributeService } from './services/contribute.service';
import { ILoadDados } from './viewmodels/interfaces/loadDados';

@UntilDestroy()
@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss']
})
export class ContributeComponent extends BaseComponent implements OnInit {
  public isAuthenticate: boolean;

  constructor(public router: Router,
    public contributeService: ContributeService,
    private toastr: ToastrService,
    public credentialsService: CredentialsService,
    private signUpService: SignUpService,
    private route: ActivatedRoute) {
    super();
  }

  public ngOnInit(): void {
    this.isAuthenticate = this.credentialsService.isAuthenticated();
    this.loadDados();
  }

  public onOpenPage(opt: string): void {
    switch (opt) {
      case 'translate':
        this.router.navigate(['translate'], { relativeTo: this.route });
        break;

      case 'projects':
        this.router.navigate(['projects'], { relativeTo: this.route });
        break;

      case 'search':
        this.router.navigate(['search'], { relativeTo: this.route });
        break;

      case 'download':
        this.router.navigate(['download'], { relativeTo: this.route });
        break;

      default:
        break;
    }
  }

  public filterProjects(listProjects: IProject[]): IProject[] {
    if (!listProjects) {
      return [];
    }

    const currentUserProjectsId = (this.credentialsService.currentUser && this.credentialsService.currentUser.userProjects) ?
      this.credentialsService.currentUser.userProjects.filter(x => x.isAutorized).map(x => x.projectId) : [];

    return listProjects.filter(x => currentUserProjectsId.includes(x.id));
  }

  private loadDados(): void {
    this.incrementIsBusy();

    forkJoin([
      this.contributeService.loadDados(),
      this.isAuthenticate ? this.signUpService.emailExists(this.credentialsService.getCredentials.email) : of(null)
    ])
      .pipe(untilDestroyed(this))
      .subscribe(([response, user]: [ILoadDados, UserViewModel]) => {
        if (response) {
          this.contributeService.projectsList = response.projects;
          this.contributeService.languagesList = response.languages;
          this.contributeService.loadDadosCompleted = true;
          this.contributeService.projectControl.enable({ emitEvent: false });
        }

        this.credentialsService.currentUser = user ? new UserViewModel(user) : null;

        this.decrementIsBusy();
      },
        () => {
          this.toastr.error('Erro ao carregar dados');
          this.decrementIsBusy();
        });
  }

}
