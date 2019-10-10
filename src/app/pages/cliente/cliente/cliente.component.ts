import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

import { HttpService } from './../../../services/httpService';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  subscription: Subscription;
  cliente: any;
  linkWaze: string = '#';

  formCliente = this.formBuilder.group({
      nmRazaoSocial: null,
      nmFantasia: null,
      dsLogradouro: null,
      nuLogradouro: null,
      dsComplemento: null,
      nmBairro: null,
      nmCidade: null,
      nuCep: null,
      nuFone: null,
      nuCnpj: null,
      nuIE: null,
      dsObservacao: null,
      dsSituacao: null,
      dsEmail: null,
      dsHome: null,
      dsSenhanet: null,
      nmContato: null
  });

  constructor(private route: ActivatedRoute, private httpService: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(value => {
      this.carregarCliente(value['id']);
    });
  }

  carregarCliente(id) {
    this.httpService.getClientePorID(id).subscribe((data: any) => {
      this.formCliente.controls['nmRazaoSocial'].setValue(data.nmRazaoSocial);
      this.formCliente.controls['nmFantasia'].setValue(data.nmFantasia);
      this.formCliente.controls['dsLogradouro'].setValue(data.dsLogradouro);
      this.formCliente.controls['nuLogradouro'].setValue(data.nuLogradouro);
      this.formCliente.controls['dsComplemento'].setValue(data.dsComplemento);
      this.formCliente.controls['nmBairro'].setValue(data.nmBairro);
      this.formCliente.controls['nmCidade'].setValue(data.nmCidade);
      this.formCliente.controls['nuCep'].setValue(data.nuCep);
      this.formCliente.controls['nuFone'].setValue(data.nuFone);
      this.formCliente.controls['nuCnpj'].setValue(data.nuCep);
      this.formCliente.controls['nuIE'].setValue(data.nuIE);
      this.formCliente.controls['dsObservacao'].setValue(data.dsObservacao);
      this.formCliente.controls['dsSituacao'].setValue(data.dsSituacao);
      this.formCliente.controls['dsEmail'].setValue(data.dsEmail);
      this.formCliente.controls['dsHome'].setValue(data.dsHome);
      this.formCliente.controls['dsSenhanet'].setValue(data.dsSenhanet);
      this.formCliente.controls['nmContato'].setValue(data.nmContato);
      this.linkWaze = data.linkWaze;
    });
  }

}
