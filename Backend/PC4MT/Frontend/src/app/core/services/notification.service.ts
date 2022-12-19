import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITranslationLike } from '../../contribute/viewmodels/interfaces/translationLike';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public translationLikeAdded: Subject<ITranslationLike> = new Subject<ITranslationLike>();
  public translationLikeUpdated: Subject<ITranslationLike> = new Subject<ITranslationLike>();

  private connection: any = new signalR.HubConnectionBuilder()
    .withUrl(environment.serverUrlNotification)
    .configureLogging(signalR.LogLevel.Information)
    .build();

  constructor(public http: HttpClient) {
    this.connection.onclose(async () => {
      await this.startConnection();
    });

    this.listenNotifications();

    this.startConnection();
  }

  private listenNotifications(): void {
    this.connection.on('SendTranslationLikeAdd', (registo: ITranslationLike) => {
      this.translationLikeAdded.next(registo);
    });

    this.connection.on('SendTranslationLikeUpdate', (registo: ITranslationLike) => {
      this.translationLikeUpdated.next(registo);
    });
  }

  // Start the connection
  public async startConnection(): Promise<any> {
    try {
      await this.connection.start();

    } catch (err) {
      console.log(err);
      setTimeout(() => this.startConnection(), 5000);
    }
  }

  public sendTranslationLikeAdd(registo: ITranslationLike): void {
    this.connection.send('SendTranslationLikeAdd', registo);
  }

  public sendTranslationLikeUpdate(registo: ITranslationLike): void {
    this.connection.send('SendTranslationLikeUpdate', registo);
  }

}
