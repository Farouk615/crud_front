import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  helper = new JwtHelperService();

  

 person = {
   email:'',
   role:''
 }

  constructor(private http:HttpClient) { }
  
  login(credentials:any){
    return this.http.post("http://127.0.0.1:8000/api/login_check",credentials);
  }
  register(credentials:any){
    return this.http.post("http://127.0.0.1:8000/api/users",credentials);
  }
  saveDataProfil(token:any){
  localStorage.setItem('token',token);
  const decodedToken = this.helper.decodeToken(token)
  this.person.email=decodedToken.username;
  this.person.role=decodedToken.roles;
  }

  isLoggedIn(){
    const token:any= localStorage.getItem('token')
    if(this.helper.isTokenExpired(token) || token==null)
    return false;
    else 
    return true;
  }
  
}
