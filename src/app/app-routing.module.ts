import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClienteListComponent } from './pages/cliente/cliente-list/cliente-list.component';
import { ClienteComponent } from './pages/cliente/cliente/cliente.component';
import { ColabListComponent } from './pages/colaborador/colab-list/colab-list.component';
import { ColabComponent } from './pages/colaborador/colab/colab.component';
import { OsListComponent } from './pages/os/os-list/os-list.component';
import { OsComponent } from './pages/os/os/os.component';

const routes: Routes = [
  { path: 'clientes', component: ClienteListComponent, data: {titulo: 'Clientes'} },
  { path: 'cliente/:id', component: ClienteComponent, data: {titulo: 'Cliente'} },
  { path: 'colaboradores', component: ColabListComponent, data: {titulo: 'Colaboradores'} },
  { path: 'colaborador/:id', component: ColabComponent, data: {titulo: 'Colaborador'} },
  { path: 'oss', component: OsListComponent, data: {titulo: 'Ordens de Serviço'} },
  { path: 'os/:id', component: OsComponent, data: {titulo: 'Ordem de Serviço'} },
  { path: 'home', component: DashboardComponent, data: {titulo: 'Dashboard'} },
  { path: '**', component: DashboardComponent, data: {titulo: 'Dashboard'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
