import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from 'src/app/interfaces/LoginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup = this.fb.group({
    email   :  ['', [Validators.required]],
    password:  ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(private fb:FormBuilder, private http: HttpClient, private router:Router){}

  login(){
    if(this.loginForm.valid) {
      const {email, password} = this.loginForm.value;

      const body = {
        email,
        password
      }

      this.http.post<LoginResponse>('https://s7-clone-production.up.railway.app/auth/login', body).subscribe((data) => {
        if(data.Token){
          sessionStorage.setItem('token', data.Token);
          sessionStorage.setItem('user', JSON.stringify(data.user));

          this.router.navigate(['planificar']);
        }
      });
    }
  }
}
