import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import ProfileComponent from 'src/app/components/profile/profile.component';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [CommonModule, ProfileComponent],
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export default class RecordComponent {

}
