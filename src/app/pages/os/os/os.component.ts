import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/httpService';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'os-component',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.css']
})
export class OsComponent implements OnInit {

  isLoading: boolean;
  subscription: Subscription;
  formOS = this.formBuilder.group({
    id: new FormControl(),
    nuDocumento: new FormControl(),
    idCliente: new FormControl(),
    nmCliente: new FormControl(),
    idColaborador: new FormControl(),
    nmColaborador: new FormControl(),
    dtEmisao: new FormControl(),
    dtFinalizacao: new FormControl(),
    dtPrevisao: new FormControl(),
    dsAssunto: new FormControl(),
    dsServico: new FormControl(),
    dsServicoInterno: new FormControl(),
    dsStatus: new FormControl(),
    dsSituacao: new FormControl(),
    dtSuporte: new FormControl(),
    dtTeste: new FormControl(),
    dtTreinamento: new FormControl(),
    dtProgramacao: new FormControl()
});






  constructor(private activedRoute: ActivatedRoute, private route: Router,
    private httpService: HttpService, private formBuilder: FormBuilder) {
      this.isLoading = true;
    }

  ngOnInit() {
    this.subscription = this.activedRoute.params.subscribe(value => {
      this.carregarOS(value['id']);
    });
  }

  clearData(data) {
    let s = data == '0001-01-01T00:00:00' ? '  /  /     ' : data;
    return s.split('T')[0];
  }


  carregarOS(id) {
    this.httpService.getOSPorID(id).subscribe((data: any) => {
      this.isLoading = false;
      this.formOS.controls['id'].setValue(data.id);
      this.formOS.controls['nuDocumento'].setValue(data.nuDocumento);
      this.formOS.controls['idCliente'].setValue(data.idCliente);
      this.formOS.controls['nmCliente'].setValue(data.nmCliente);
      this.formOS.controls['idColaborador'].setValue(data.idColaborador);
      this.formOS.controls['nmColaborador'].setValue(data.nmColaborador);
      this.formOS.controls['dtEmisao'].setValue(this.clearData(data.dtEmisao));
      this.formOS.controls['dtFinalizacao'].setValue(this.clearData(data.dtFinalizacao));
      this.formOS.controls['dtPrevisao'].setValue(this.clearData(data.dtPrevisao));
      this.formOS.controls['dsAssunto'].setValue(data.dsAssunto);
      this.formOS.controls['dsServico'].setValue(data.dsServico);
      this.formOS.controls['dsServicoInterno'].setValue(data.dsServicoInterno);
      this.formOS.controls['dsStatus'].setValue(data.dsStatus);
      this.formOS.controls['dsSituacao'].setValue(data.dsSituacao);
      this.formOS.controls['dtSuporte'].setValue(this.clearData(data.dtSuporte));
      this.formOS.controls['dtTeste'].setValue(this.clearData(data.dtTeste));
      this.formOS.controls['dtTreinamento'].setValue(this.clearData(data.dtTreinamento));
      this.formOS.controls['dtProgramacao'].setValue(this.clearData(data.dtProgramacao));
    });
  }

}
