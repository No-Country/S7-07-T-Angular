import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
    const {email, password} = this.loginForm.value;
    console.log("Login", email, password)

    const body = {
      email,
      password
    }

    this.http.post('https://s7-clone-production.up.railway.app//auth/login', body).subscribe((data) => {
      console.log(data);
    });
  }
}
