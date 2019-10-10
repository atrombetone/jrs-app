import { Component, OnInit } from '@angular/core';
import { OrdemServicoModel } from 'src/app/models/OrdemServicoModel';
import { HttpService } from './../../../services/httpService';
import { Subscription, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { Globals } from './../../../globals';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'jrs-os-list',
  templateUrl: './os-list.component.html',
  styleUrls: ['./os-list.component.css']
})
export class OsListComponent implements OnInit {

  listaOss: any;
  subscrition: Subscription;
  isLoading: boolean;
  expandido: boolean;

  acCliente = new FormControl();
  acColab = new FormControl();
  options: string[] = [];
  colabs: string[] = [];
  servicos: string[] = [];
  filteredOptions: Observable<string[]>;
  filteredColabs: Observable<string[]>;


  formPesquisa = this.formBuilder.group({
    DtInicio: null,
    DtFinal: null,
    DsStatus: null,
    NuOrdemServico: null,
    DsFuncionario: null,
    DsCliente: null,
    InServico: null,
    NotInServico: null,
    DsConteudo: null,
    NmSistema: null
  });

constructor(private httpService: HttpService, private snackBar: MatSnackBar,
  private router: Router, private formBuilder: FormBuilder, private global: Globals) {
  this.isLoading = true;
  this.expandido = false;

  // if (!this.global.dadosFiltro) {
    this.isLoading = true;
    this.httpService.getDadosFiltro().subscribe(data => {
      this.isLoading = false;
      this.global.dadosFiltro = data;
      this.options = data.clientes;
      this.colabs = data.funcionarios;
      this.servicos = data.servicos;
    });
  // }
}

ngOnInit() {
  this.carregarOSs();
  this.formPesquisa.controls["DsStatus"].setValue('A');

  this.filteredOptions = this.acCliente.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value))
  );

  this.filteredColabs = this.acColab.valueChanges.pipe(
    startWith(''),
    map(value => this._filterColab(value))
  );

}

private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();
  console.log(this.options.filter(option => option.toLowerCase().includes(filterValue)));
  return this.options.filter(option => option.toLowerCase().includes(filterValue));
}

private _filterColab(value: string): string[] {
  const filterValue = value.toLowerCase();
  return this.colabs.filter(option => option.toLowerCase().includes(filterValue));
}

carregarOSs() {
  this.subscrition = this.httpService.getOSs().subscribe(
    data => {
      this.isLoading = false;
      this.listaOss = data;
    },
    error => {
      this.isLoading = false;
      this.snackBar.open(error.message, '', { duration: 4000 });
    }
  );
}

visualizarOS(id) {
  this.router.navigate(['os', id]);
}

showPesquisa() {
  this.expandido = true;
}

minhasOSs() {
  this.expandido = false;
  this.carregarOSs();
}

executarPesquisa() {
  this.expandido = false;
  this.pesquisarOSs();
}


pesquisarOSs() {
  this.expandido = false;
  this.isLoading = true;
  this.listaOss = [];
  this.formPesquisa.controls["DsCliente"].setValue(this.acCliente.value);
  this.formPesquisa.controls["DsFuncionario"].setValue(this.acColab.value);
  this.subscrition = this.httpService.getOSsFilter(this.formPesquisa.value).subscribe(
    data => {
      this.isLoading = false;
      this.listaOss = data;
    },
    error => {
      this.isLoading = false;
      this.snackBar.open(error.message, '', { duration: 4000 });
    }
  );
}
}
