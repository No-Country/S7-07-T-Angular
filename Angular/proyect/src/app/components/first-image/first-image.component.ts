import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-image',
  templateUrl: './first-image.component.html',
  styleUrls: ['./first-image.component.css'],
  standalone: true,
  imports:[
    CommonModule,
  ]
})
export default class FirstImageComponent {

}
