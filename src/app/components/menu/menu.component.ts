import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivationEnd, Router, NavigationStart } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'jrs-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  @ViewChild('drawer') drawer: MatSidenav;

  config: any;
  subscription: Subscription;
  isLogado = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private route: Router, private cookieService: CookieService) {
    this.config = {titulo: 'Dashboard'};
  }

  ngOnInit(): void {
    this.subscription =   this.route.events.subscribe(
      event => {
        const _usuario = JSON.parse(this.cookieService.get('jrscrm-cookie'));
        if(_usuario != null && _usuario.hasOwnProperty('token')) {
          this.isLogado = true;
        }

        if(event instanceof NavigationStart) {
          this.isHandset$.subscribe(_isScalar => {
             if(_isScalar == true) {
                if(this.drawer)
                  this.drawer.close();
            }
          });
        }

        if(event instanceof ActivationEnd) {
          this.config = event.snapshot.data;
        }

    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logoff() {
    //sessionStorage.removeItem('usuarioLogado');
    this.cookieService.delete('jrscrm-cookie');
    window.location.href = '/login';
  }

}
