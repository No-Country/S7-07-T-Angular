import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import LoginComponent from 'src/app/auth/login/login.component';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css'],
})
export class LoginLayoutComponent {}
