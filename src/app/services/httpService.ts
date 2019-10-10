import { Injectable } from '@angular/core';
import { Globals } from '../globals';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError, take } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { environment } from './../../environments/environment';

import { ClienteModel } from './../models/ClienteModel';
import { ColaboradorModel } from './../models/ColaboradorModel';
import { LoginModel } from './../models/LoginModel';
import { OrdemServicoModel } from '../models/OrdemServicoModel';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  CLIENTE_SUFIX = 'cliente/';
  CLIENTE_AUTOCOMPLETE_SUFIX = 'cliente/listar/';
  COLABORADOR_SUFIX = 'colaborador/';
  LOGIN_SUFIX = 'login/';
  OS_SUFIX = 'ordemservico/';
  OS_FILTER_SUFIX = 'ordemservico/filtrar/';
  OS_DADOS_FILTRO = 'ordemservico/listarfiltros';
  DASH_SUFIX = 'dash/';

  constructor(private globals: Globals, private http: HttpClient) { }

  public getClientesAutoComplete(filtro): Observable<Array<ClienteModel>> {
    return this.http.get<Array<ClienteModel>>(environment.apiUrl + this.CLIENTE_AUTOCOMPLETE_SUFIX + filtro);
  }

  public getClientes(): Observable<Array<ClienteModel>> {
    return this.http.get<Array<ClienteModel>>(environment.apiUrl + this.CLIENTE_SUFIX);
  }

  public getClientePorID(id): Observable<ClienteModel>  {
    return this.http.get<ClienteModel>(environment.apiUrl + this.CLIENTE_SUFIX + id);
  }

  public getColaboradores(): Observable<Array<ColaboradorModel>> {
    return this.http.get<Array<ColaboradorModel>>(environment.apiUrl + this.COLABORADOR_SUFIX);
  }

  public getColaboradorPorID(id): Observable<ColaboradorModel> {
    return this.http.get<ColaboradorModel>(environment.apiUrl + this.COLABORADOR_SUFIX + id);
  }

  public efetuarLogin(usuario: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + this.LOGIN_SUFIX, usuario);
  }

  public getOSs(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + this.OS_SUFIX);
  }

  public getDadosFiltro(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + this.OS_DADOS_FILTRO);
  }

  public getOSsFilter(filtro): Observable<any> {
    return this.http.post<any>(environment.apiUrl + this.OS_FILTER_SUFIX, filtro);
  }

  public getOSPorID(id): Observable<any> {
    return this.http.get<any>(environment.apiUrl + this.OS_SUFIX + id);
  }

  public getDadosDash(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + this.DASH_SUFIX);
  }

}
