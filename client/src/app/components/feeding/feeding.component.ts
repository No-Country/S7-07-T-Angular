import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-feeding',
  templateUrl: './feeding.component.html',
  styleUrls: ['./feeding.component.css'],
  standalone: true,
  imports:[
    CommonModule,
    RouterModule
  ]
})
export default class FeedingComponent {

}
