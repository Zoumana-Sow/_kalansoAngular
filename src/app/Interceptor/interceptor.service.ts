import { Injectable } from '@angular/core';
import {AuthService} from '../auth.service';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private auth: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.estConnecte();
    console.log(token);
    if ( token ) {
      const cloneReq = req.clone(
        {
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        }
      );
      return next.handle(cloneReq);
    }else {
      return next.handle(req);
    }
  }
}

export const InterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: InterceptorService,
  multi: true
};
