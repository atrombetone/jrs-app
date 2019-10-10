import { Injectable, NgModule } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {

    //let s = sessionStorage.getItem('usuarioLogado');
    let s = this.cookieService.get('jrscrm-cookie');
    let user = null;
    if(s && s != '')
      user = JSON.parse(s);
    else {
      user = {};
      user.token = '';
    }

    const dupReq = req.clone({
      headers: req.headers
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
        .set('Access-Control-Allow-Headers',
          'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, ' +
              'Access-Control-Request-Method, Access-Control-Request-Headers')
        .set('Authorization', 'Bearer ' + user.token)
        //.set('key', (s != undefined && s != null) ? JSON.parse(s).id : '')
    });
    return next.handle(dupReq);
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
})

export class Interceptor { }
