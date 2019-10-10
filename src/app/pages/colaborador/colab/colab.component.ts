import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from './../../../services/httpService';

@Component({
  selector: 'app-colab',
  templateUrl: './colab.component.html',
  styleUrls: ['./colab.component.css']
})
export class ColabComponent implements OnInit {

  subscription: Subscription;
  colaborador: any;

  constructor(private activedRoute: ActivatedRoute, private route: Router, private httpService: HttpService) { }

  ngOnInit() {
    this.subscription = this.activedRoute.params.subscribe(value => {
      this.carregarColaborador(value['id']);
    });
  }

  carregarColaborador(id) {
    this.httpService.getColaboradorPorID(id).subscribe((data: any) => {this.colaborador = data;});
  }

  voltar() {
    this.route.navigate(['/colaboradores']);
  }

}
