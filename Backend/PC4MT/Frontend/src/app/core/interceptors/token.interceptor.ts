import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { CredentialsService } from '../services/credentials.service';

/**
 * Adds a default error handler to all requests.
 */
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(private credentialsService: CredentialsService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    if (this.credentialsService.getCredentials != null) {
      headers = this.getAuthenticationHeader(headers);
    }

    request = request.clone({ headers });

    return next.handle(request);
  }

  private getAuthenticationHeader(headers: HttpHeaders): HttpHeaders {
    const authToken = this.credentialsService.getCredentials.token;

    if (!authToken) {
      return headers;
    }

    const authHeader = `Bearer ${authToken}`;
    return headers.append('Authorization', authHeader);
  }
}
