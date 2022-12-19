export class BaseComponent {
  public isBusy: number = 0;

  public decrementIsBusy(): void {
    this.isBusy--;
  }

  public incrementIsBusy(): void {
    this.isBusy++;
  }
}
