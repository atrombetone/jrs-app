import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../../services/httpService';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-colab-list',
  templateUrl: './colab-list.component.html',
  styleUrls: ['./colab-list.component.css']
})
export class ColabListComponent implements OnInit {

  colabs: any;
  isLoading: boolean;
  constructor(private httpService: HttpService, private route: Router, private snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.isLoading = true;
    this.httpService.getColaboradores().subscribe((data: any) => {
      this.colabs = data;
      this.isLoading = false;
    },
      error => {
        this.isLoading = false;
        this.snackBar.open(error.message, '', {duration: 4000});
      });
  }

  detalharColaborador(id) {
    this.route.navigate(['/colaborador', id]);
  }
}
