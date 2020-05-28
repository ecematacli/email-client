import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log('requests:', req);
    // Modify or log the outgoing request
    const modifiedReq = req.clone({
      withCredentials: true,
    });

    // next.handle gives back an Observable
    return next.handle(modifiedReq);
  }
}
