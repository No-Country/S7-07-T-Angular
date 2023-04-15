import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import FooterComponent from 'src/app/components/footer/footer.component';
import NavbarComponent from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-foodsession',
  templateUrl: './foodsession.component.html',
  styleUrls: ['./foodsession.component.css'],
  standalone:true,
  imports:[
    CommonModule,
    NavbarComponent,
    FooterComponent
  ]
})
export default class FoodsessionComponent {

}
