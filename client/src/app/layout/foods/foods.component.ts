import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import FoodsessionComponent from 'src/app/foodsession/foodsession.component';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [CommonModule,FoodsessionComponent],
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export default class FoodsComponent {

}
