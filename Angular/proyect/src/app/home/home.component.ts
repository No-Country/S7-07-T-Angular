import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import NavbarComponent from '../components/navbar/navbar.component';
import  FirstImageComponent from '../components/first-image/first-image.component';
import FeedingComponent from '../components/feeding/feeding.component';
import BenefitsComponent from '../components/benefits/benefits.component';
import { RoutinesComponent } from '../components/routines/routines.component';
import  FooterComponent  from '../components/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  imports:[
    CommonModule,
    NavbarComponent,
    FirstImageComponent,
    FooterComponent,
    FeedingComponent,
    BenefitsComponent,
    RoutinesComponent,
    RouterModule
  ]
})
export default class HomeComponent {

}
