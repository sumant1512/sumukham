import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    // Prefer token from localStorage, fallback to legacy hardcoded token
    const stored =
      localStorage.getItem('auth_token') || localStorage.getItem('ecom_token');
    const fallback =
      'ecommerce_0f7ad45e55ff6b86a04aa0b9fc000afb1eb166677df2b8013bb2f496986b57e0';
    const raw = stored || fallback;
    const authValue = raw.startsWith('Bearer ') ? raw : `Bearer ${raw}`;

    const authReq = req.clone({
      headers: req.headers.set('Authorization', authValue),
    });
    return next.handle(authReq);
  }
}
