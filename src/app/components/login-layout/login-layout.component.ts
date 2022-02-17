import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/services/auth.service';
import { PersonServiceService } from 'src/app/services/person-service.service';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {
  dataRecieved:any;
  loginForm:any;
  constructor(private formBuilder:FormBuilder,private personService:PersonServiceService,private authService:AuthService,private route:Router) {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    });
   } 

   
  ngOnInit(): void {
    localStorage.removeItem('token')
  }

  mkLogin(){
    this.authService.login(this.loginForm.value).subscribe(response=>{
      this.dataRecieved=response;
      this.authService.saveDataProfil(this.dataRecieved.token);
      this.route.navigate(['/persons']);
    }
      );
  }
}
