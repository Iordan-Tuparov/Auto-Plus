import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { API_URL } from './constants';
import { Provider } from '@angular/core';

export class AppInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request = req;

    if (req.url.startsWith('/api')) {
      request = req.clone({
        url: req.url.replace('/api', API_URL),
        withCredentials: true,
      });
    }

    return next.handle(request).pipe(
      tap((event) => {
        console.log(event);
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AppInterceptor,
};
