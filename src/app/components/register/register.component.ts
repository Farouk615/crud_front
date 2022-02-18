import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/services/auth.service';
import { PersonServiceService } from 'src/app/services/person-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:any

  constructor(private formBuilder:FormBuilder,private personService:PersonServiceService,private authService:AuthService,private route:Router) {
    this.registerForm=this.formBuilder.group({
      email:[''],
      plainPassword:['']
    });
   } 

  ngOnInit(): void {
  }

  mkRegister(){
    this.authService.register(this.registerForm.value).subscribe(data=>console.log(data))
    this.route.navigate(['']);
  }

}
