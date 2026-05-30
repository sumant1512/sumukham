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
      'ecommerce_5eabd27a67b4dd4d74e8e00055ac0fc8a31c2cc6f301026e389da13308ba5e2f';
    const raw = stored || fallback;
    const authValue = raw.startsWith('Bearer ') ? raw : `Bearer ${raw}`;

    const authReq = req.clone({
      headers: req.headers.set('Authorization', authValue),
    });
    return next.handle(authReq);
  }
}
