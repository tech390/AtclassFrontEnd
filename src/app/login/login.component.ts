import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup
  constructor(private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
  }
    signup(){
      this.router.navigateByUrl("/signup");
    }
    login(){
        if(this.loginForm.valid){
            let username = this.loginForm.controls['username'].value;
            let password = this.loginForm.controls['password'].value; 
            this.router.navigateByUrl("/user/home-page");
          }
    }
}
