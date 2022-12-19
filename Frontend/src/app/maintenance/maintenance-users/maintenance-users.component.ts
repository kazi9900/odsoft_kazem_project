import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from '../../shared/baseComponent';
import { RoleEnum } from '../../shared/helpers/roleEnum';
import { MaintenanceService } from '../services/maintenance.service';
import { IRole } from '../viewmodels/interfaces/role';
import { UserRoleViewModel } from '../viewmodels/userRoleViewModel';
import { UserViewModel } from '../viewmodels/userViewModel';

@UntilDestroy()
@Component({
  selector: 'app-maintenance-users',
  templateUrl: './maintenance-users.component.html',
  styleUrls: ['./maintenance-users.component.scss']
})
export class MaintenanceUsersComponent extends BaseComponent implements OnInit, OnDestroy {
  public listUsers: UserViewModel[];

  public listRoles: IRole[] = [
    { id: RoleEnum.Root, name: 'Root' },
    { id: RoleEnum.Admin, name: 'Admin' },
    { id: RoleEnum.Editor, name: 'Editor' },
    { id: RoleEnum.Regular, name: 'Regular' },
  ];

  public currentUser: UserViewModel = null;

  public popupVisible: boolean = false;

  public form: FormGroup;
  public isFormSubmitted: boolean = false;

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

  public onSelectItem(user: UserViewModel): void {
    this.isFormSubmitted = false;
    this.currentUser = user;
    this.initializeForm();
    this.popupVisible = true;
  }

  public onCancel(): void {
    this.popupVisible = false;
    this.form = null;
    this.currentUser = null;
    this.isFormSubmitted = false;
  }

  public onSave(): void {
    this.isFormSubmitted = true;

    if (this.form && this.form.valid) {
      const registo = new UserViewModel();
      registo.id = this.form.get('id').value;
      registo.name = this.form.get('name').value;
      registo.email = this.form.get('email').value;
      registo.userRoles = [];

      if (this.form.get('roleId').value) {
        const role = new UserRoleViewModel();
        role.userId = this.form.get('id').value;
        role.roleId = this.form.get('roleId').value;
        registo.userRoles.push(role);
      }

      if (this.currentUser && this.currentUser.id) { // UPDATE
        this.incrementIsBusy();
        this.maintenanceService.updateUser(registo)
          .pipe(untilDestroyed(this))
          .subscribe((response: UserViewModel) => {
            this.currentUser.copyFrom(response);
            this.popupVisible = false;
            this.form = null;
            this.currentUser = null;
            this.decrementIsBusy();
          }, () => {
            this.decrementIsBusy();
            this.toastr.error('Erro ao atualizar o utilizador');
          });

      } else { // INSERT
        this.incrementIsBusy();
        this.maintenanceService.insertUser(registo)
          .pipe(untilDestroyed(this))
          .subscribe((response: UserViewModel) => {
            this.currentUser = new UserViewModel(response);
            this.listUsers.push(this.currentUser);
            this.popupVisible = false;
            this.form = null;
            this.currentUser = null;
            this.decrementIsBusy();
          }, () => {
            this.decrementIsBusy();
            this.toastr.error('Erro ao inserir novo utilizador');
          });
      }
    }
  }

  private loadRegistos(): void {
    this.spinner.show();
    this.incrementIsBusy();
    this.maintenanceService.getUsers()
      .pipe(untilDestroyed(this))
      .subscribe((response: UserViewModel[]) => {
        this.listUsers = response;
        this.decrementIsBusy();
        this.spinner.hide();
      }, () => {
        this.decrementIsBusy();
        this.spinner.hide();
        this.toastr.error('Erro ao carregar registos');
      });
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      id: [this.currentUser.id],
      name: [{ value: this.currentUser.name, disabled: true }, [Validators.required]],
      email: [{ value: this.currentUser.email, disabled: true }, [Validators.required]],
      roleId: [this.currentUser.userRoles && this.currentUser.userRoles[0] ? this.currentUser.userRoles[0].roleId : null, []],
    });
  }
}
