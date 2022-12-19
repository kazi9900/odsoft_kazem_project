import { ProjectUserViewModel } from '../../maintenance/viewmodels/projectUserViewModel';
import { ProjectViewModel } from '../../maintenance/viewmodels/projectViewModel';

export class UserProjectViewModel extends ProjectUserViewModel {
  public project: ProjectViewModel;

  constructor(registo?: UserProjectViewModel) {
    super(registo);
    this.copyFrom(registo);
  }

  public copyFrom(registo?: UserProjectViewModel): void {
    if (registo) {
      this.userId = registo.userId;
      this.projectId = registo.projectId;
      this.isprojectOwner = registo.isprojectOwner;
      this.isAutorized = registo.isAutorized;
      this.project = registo.project ? new ProjectViewModel(registo.project) : null;
    }
  }
}
