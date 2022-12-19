export class DownloadSettignsViewModel {
  public maxSentencesPerDownload: number | null;
  public maxSentencesPerUser: number | null;
  public maxSentencesL1L2: number | null;
  public maxDownloadsPerUser: number | null;

  constructor(registo?: DownloadSettignsViewModel) {
    this.copyFrom(registo);
  }

  public copyFrom(registo?: DownloadSettignsViewModel): void {
    if (registo) {
      this.maxSentencesPerDownload = registo.maxSentencesPerDownload;
      this.maxSentencesPerUser = registo.maxSentencesPerUser;
      this.maxSentencesL1L2 = registo.maxSentencesL1L2;
      this.maxDownloadsPerUser = registo.maxDownloadsPerUser;
    }
  }
}
