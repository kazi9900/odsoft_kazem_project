import { ILanguage } from '../../../signin-signup/signup-form/viewmodels/interfaces/language';
import { IProject } from '../../../signin-signup/signup-form/viewmodels/interfaces/project';

export interface ILoadDados {
    languages: ILanguage[];
    projects: IProject[];
}
