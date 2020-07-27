import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private router: Router, private authService: AuthService, private http: HttpClient) {
  }

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
        password: password
      };
      this.authService.login(body).pipe(takeUntil(this.ngUnsubscribe)).subscribe((response: any) => {
        if (response) {
          this.authService.isLoggedIn = true;
          localStorage.setItem('token', response.token);
          this.router.navigateByUrl('/user/home-page');
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
