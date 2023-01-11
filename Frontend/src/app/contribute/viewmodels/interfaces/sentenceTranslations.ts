import { SentenceViewModel } from '../sentenceViewModel';
import { ITranslation } from './translation';

export interface ISentenceTranslations {
  sentence: SentenceViewModel;
  translations: ITranslation[];
}
