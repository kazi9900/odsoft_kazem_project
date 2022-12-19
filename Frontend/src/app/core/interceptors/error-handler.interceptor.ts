import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ActivatedRoute, Router } from '@angular/router';
import { Logger } from '../services/logger.service';
import { env } from 'src/environments/.env';

const log = new Logger('ErrorHandlerInterceptor');

/**
 * Adds a default error handler to all requests.
 */
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(error => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    if (!env.production) {
      // Do something with the error
      log.error('Request error', response);
    }
    // redirect to login if token is expired
    if (response instanceof HttpErrorResponse) {
      if (response.status === 401) {
        this.router.navigate([this.route.snapshot.queryParams.redirect || '/login'], { replaceUrl: true });
      }
    }
    throw response;
  }
}
