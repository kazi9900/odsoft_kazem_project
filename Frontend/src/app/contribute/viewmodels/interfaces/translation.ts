import { SentenceViewModel } from '../sentenceViewModel';
import { ITranslationLike } from './translationLike';

export interface ITranslation {
  id: number;
  sentenceL2: SentenceViewModel;
  translationLikes: ITranslationLike[];
}
