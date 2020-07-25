import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  signup() {
    this.router.navigateByUrl('/signup');
  }
  login() {
    if (this.loginForm.valid) {
      const username = this.loginForm.controls.username.value;
      const password = this.loginForm.controls.password.value;
      const body = {
        userName: username,
        password
      };
      this.http.post('http://localhost:3000/user/login', body).subscribe((response: any) => {
        console.log(response);
        if (response) {
          localStorage.setItem('token', response.token);
          this.router.navigateByUrl('/user/home-page');
        }
      });
    }
  }
}
