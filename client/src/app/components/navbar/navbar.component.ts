// import { Router } from 'express';
// import { Router } from 'express';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports:[
    CommonModule,
    RouterModule
  ]

})
export default class NavbarComponent {

  public routes:string[]
  constructor(){


    let _routes = [
      {
        path:'alimentacion',
        sub1:[
          {
            path:'presentacion'
          },
          {
            path:'beneficios'
          }
        ]
      },
      {
        path:'alimentacion',
      }
    ]

    this.routes = [

      'inicio',
      'alimentacion',
      'historial'
    ]
  }
}
