import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegisterResponse } from 'src/app/interfaces/RegisterResponse';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm:FormGroup = this.fb.group({
    username  :  ['', [Validators.required]],
    email   :  ['', [Validators.required]],
    password:  ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(private fb:FormBuilder, private http: HttpClient, private router:Router){}

  register(){
    const {username, email, password} = this.registerForm.value;

    const options = {
      headers: {
        'Authorization': 'Bearer mi-token',
        'Content-Type': 'application/json'
      }
    };

    const body = {
      username,
      email,
      password
    }

    this.http.post<RegisterResponse>('https://s7-clone-production.up.railway.app/auth/register', body, options).subscribe((data) => {
      if( data.valid === true){
        this.router.navigateByUrl('/login');
      }
    });
  }
}
