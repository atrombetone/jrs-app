import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpService } from './../services/httpService';
import { MatSnackBar } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    login: '',
    senha: ''
  });

  constructor(private httpService: HttpService, private fb: FormBuilder, private route: Router, private snackBar: MatSnackBar, private cookieService: CookieService) { }

  ngOnInit() {
  }

  efetuarLogin() {

    this.httpService.efetuarLogin(this.loginForm.value).subscribe(
      data => {
        if (data.hasOwnProperty('token'))  {
          debugger;
          this.cookieService.set('jrscrm-cookie', JSON.stringify(data));
          window.location.href = '/home';
       }
      },
      erro  => {
        if(erro.status == 401)
          this.snackBar.open(erro.error.message, '', { duration: 5000 });
      });
  }
}
