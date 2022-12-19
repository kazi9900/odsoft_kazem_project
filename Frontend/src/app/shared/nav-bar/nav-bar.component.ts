import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../../core/services/authentication.service';
import { CredentialsService } from '../../core/services/credentials.service'; 

@UntilDestroy()
@Component({
  selector: 'app-nav-bar',  
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  public currentLanguage = this.translateService.currentLang || 'en';
  public currentLanguageControl = new FormControl(this.currentLanguage);

  public languages: { id: string, descr: string }[] = [
    { id: 'en', descr: 'En' },
    { id: 'pt', descr: 'Pt' }
  ];

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    public credentialsService: CredentialsService,
    public translateService: TranslateService) {
    this.translateService.onLangChange
      .pipe(untilDestroyed(this))
      .subscribe((langChangeEvent: LangChangeEvent) => {
        this.currentLanguage = langChangeEvent.lang;
        this.currentLanguageControl.setValue(this.currentLanguage, { emitEvent: false });
      });

    this.currentLanguageControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value: string) => {
        this.currentLanguage = value;
        this.translateService.use(value);
      });
  }

  public onOpenPage(opt: string): void {

    switch (opt) {
      case 'home':
        this.router.navigate(['/'], { replaceUrl: true });
        break;

      case 'contribute':
        this.router.navigate(['/contribute/translate'], { replaceUrl: true });
        break;

      case 'signin-signup':
        this.router.navigate(['/signin-signup'], { replaceUrl: true });
        break;

      case 'profile':
        this.router.navigate(['/profile'], { replaceUrl: true });
        break;

      case 'maintenance':
        this.router.navigate(['/maintenance'], { replaceUrl: true });
        break;

      default:
        break;
    }
  }

  public signOut(): void {
    this.authenticationService.logout()
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.router.navigate(['/'], { replaceUrl: true });
      });
  }

}
