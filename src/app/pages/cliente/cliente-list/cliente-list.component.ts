import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpService } from './../../../services/httpService';
import { ClienteModel } from './../../../models/ClienteModel';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  subscription: Subscription;
  clientes: any;
  isLoading: boolean;

  formPesquisa = this.formBuilder.group({
    txtPesquisa: null
  });


  constructor(private route: Router, private httpService: HttpService, private snackBar: MatSnackBar, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isLoading = true;
    this.httpService.getClientes().subscribe(
      data => {
        this.clientes = data;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.snackBar.open(error.message, '', {duration: 4000});
      });
  }

  detalharCliente(id) {
    this.route.navigate(['/cliente', id]);
  }

  executarPesquisa() {
    this.isLoading = true;
    this.httpService.getClientesAutoComplete(this.formPesquisa.value.txtPesquisa).subscribe(
      data => {
        this.clientes = data;
        this.isLoading = false;
      },
      error => {
         this.isLoading = false;
         this.snackBar.open(error.message, '', {duration: 4000});
      });
  }
}
