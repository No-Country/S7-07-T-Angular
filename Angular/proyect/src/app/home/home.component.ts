import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import NavbarComponent from '../components/navbar/navbar.component';
import  FooterComponent  from '../components/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  imports:[
    CommonModule,
    NavbarComponent,
    FooterComponent,
    RouterModule
  ]
})
export default class HomeComponent {

}
