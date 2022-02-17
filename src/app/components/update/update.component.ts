import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/login/services/auth.service';
import { PersonServiceService } from 'src/app/services/person-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  person={
    name:'',
    age:0,
    job:''
  }
  id!:number;
  personForm:any
  constructor(private route:ActivatedRoute,private ps:PersonServiceService,private formBuilder:FormBuilder,private authService:AuthService,private rout:Router,private personService:PersonServiceService) {
    this.id=this.route.snapshot.params['id'];
    this.person.name=this.route.snapshot.params['name'];
    this.person.age=this.route.snapshot.params['age'];
    this.person.job=this.route.snapshot.params['job'];
    this.personForm=this.formBuilder.group({
      id:0,
      name:[this.person.name],
      age:[this.person.age],
      job:[this.person.job]
    });
    if(authService.isLoggedIn()==false){
      this.rout.navigate(['']);
    }
 
   }

  ngOnInit(): void {
  }
update(){
  this.personService.updatePerson(this.personForm.value,this.id);
  this.rout.navigate(['persons'])

}
}
