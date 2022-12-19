import { IProject } from './project';

export interface IUserProject {
  userId: number;
  projectId: number;
  isProjectOwner: boolean;
  isAutorized: boolean | null;
  project: IProject;
}
