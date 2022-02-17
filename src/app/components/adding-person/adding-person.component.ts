import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/login/services/auth.service';
import { PersonServiceService } from 'src/app/services/person-service.service';

@Component({
  selector: 'app-adding-person',
  templateUrl: './adding-person.component.html',
  styleUrls: ['./adding-person.component.css']
})
export class AddingPersonComponent implements OnInit {
  personForm:any;
  constructor(private formBuilder:FormBuilder,private personService:PersonServiceService,private authService:AuthService,private route:Router,private rout:ActivatedRoute) {
    this.personForm=this.formBuilder.group({
      id:0,
      name:[''],
      age:[''],
      job:['']
    });
    if(authService.isLoggedIn()==false){
      this.route.navigate(['']);
    }

   }

  ngOnInit(): void {
  }

addNew(){
  
  this.personService.addPerson(this.personForm.value);
  this.route.navigate(['/persons']);
}
}
