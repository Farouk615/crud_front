import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/services/auth.service';
import { PersonServiceService } from 'src/app/services/person-service.service';

@Component({
  selector: 'app-list-of-persons',
  templateUrl: './list-of-persons.component.html',
  styleUrls: ['./list-of-persons.component.css']
})
export class ListOfPersonsComponent implements OnInit {
  persons:any;

  constructor(private personService:PersonServiceService,private httpClient:HttpClient,private authService:AuthService,private route:Router) { 
    if(authService.isLoggedIn()==false){
      this.route.navigate(['']);
    }
  }

  ngOnInit(): void {
    this.personService.getAllPersons().subscribe(data=>this.persons=data);
    console.log(this.persons);
  }

  delete(id:number){
    this.personService.deletePerson(id).subscribe(data=>console.log(data));
    this.personService.getAllPersons().subscribe(data=>this.persons=data);
  }
  update(){
    
  }
}
