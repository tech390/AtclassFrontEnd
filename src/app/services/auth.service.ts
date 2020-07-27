import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  constructor(private http:HttpClient) { }
  
  login(requestObj){
    return this.http.post('http://localhost:3000/user/login',requestObj)
  }
}
