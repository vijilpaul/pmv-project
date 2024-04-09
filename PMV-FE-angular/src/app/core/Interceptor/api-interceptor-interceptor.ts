import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const lStorage = localStorage.getItem('currentUser') || '';
    const storeUser = lStorage ? JSON.parse(lStorage) : '';
    const token = storeUser.token;
    const authRequest = request.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    return next.handle(authRequest)
  }
}
