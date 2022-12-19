import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UntilDestroy } from '@ngneat/until-destroy';

import { BaseComponent } from '../shared/baseComponent';

@UntilDestroy()
@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent extends BaseComponent implements OnInit {
  constructor(public router: Router,
    private route: ActivatedRoute) {
    super();
  }

  public ngOnInit(): void {
    this.router.navigate(['users'], { relativeTo: this.route });
  }

  public onOpenPage(opt: string): void {
    switch (opt) {
      case 'users':
        this.router.navigate(['users'], { relativeTo: this.route });
        break;

      case 'projects':
        this.router.navigate(['projects'], { relativeTo: this.route });
        break;

      case 'languages':
        this.router.navigate(['languages'], { relativeTo: this.route });
        break;

      case 'downloadsettings':
        this.router.navigate(['downloadsettings'], { relativeTo: this.route });
        break;

      default:
        break;
    }
  }
}
