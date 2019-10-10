import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpService } from './../../services/httpService';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'jrs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  dados: any;
  isLoading: boolean;
  constructor(private httpService: HttpService, private route: Router) {}

  ngOnInit() {
    this.isLoading = true;
    this.subscription = this.httpService.getDadosDash().subscribe(data => {
      this.dados = data;
      console.log(this.dados);
      this.isLoading = false;
    });
  }

  visualizarOS(id) {
    this.route.navigate(['os', id]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
