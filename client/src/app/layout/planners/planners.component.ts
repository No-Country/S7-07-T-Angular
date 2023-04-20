import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import PlannerComponent from 'src/app/planner/planner.component';

@Component({
  selector: 'app-planners',
  standalone: true,
  imports: [CommonModule, PlannerComponent],
  templateUrl: './planners.component.html',
  styleUrls: ['./planners.component.css']
})
export class PlannersComponent {

}
