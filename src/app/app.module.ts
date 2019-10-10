import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatProgressSpinnerModule,
  MatInputModule, MatSelectModule, MatRadioModule, MatAutocompleteModule, MatExpansionModule,
  MatBottomSheetModule,  MatDatepickerModule,  MatNativeDateModule, MatTabsModule, MatProgressBarModule  } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { Globals } from './globals';
import { HttpService } from './services/httpService';

import { ClienteListComponent } from './pages/cliente/cliente-list/cliente-list.component';
import { ClienteComponent } from './pages/cliente/cliente/cliente.component';
import { ColabListComponent } from './pages/colaborador/colab-list/colab-list.component';
import { ColabComponent } from './pages/colaborador/colab/colab.component';
import { OsListComponent } from './pages/os/os-list/os-list.component';
import { OsComponent } from './pages/os/os/os.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TesteComponent } from './pages/teste/teste.component';
import { CookieService } from 'ngx-cookie-service';

import { LoginComponent } from './login/login.component';
import { Interceptor } from './services/interceptor.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClienteListComponent,
    ClienteComponent,
    ColabListComponent,
    ColabComponent,
    OsListComponent,
    OsComponent,
    DashboardComponent,
    TesteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatBottomSheetModule,
    MatTabsModule,
    MatProgressBarModule,
    Interceptor
  ],
  providers: [
    Globals,
    HttpService,
    CookieService,
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
