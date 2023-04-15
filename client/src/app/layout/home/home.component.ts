import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import BenefitsComponent from 'src/app/components/benefits/benefits.component';
import FeedingComponent from 'src/app/components/feeding/feeding.component';
import FirstImageComponent from 'src/app/components/first-image/first-image.component';
import  RoutinesComponent  from 'src/app/components/routines/routines.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BenefitsComponent, FeedingComponent, FirstImageComponent, RoutinesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export default class HomeComponent {

}
