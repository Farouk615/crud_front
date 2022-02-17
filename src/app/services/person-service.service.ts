import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(private httpClient:HttpClient) { 
  }

  getAllPersons(){
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` })
    };
    const url="http://127.0.0.1:8000/api/getPersons";
    return this.httpClient.get(url,httpOptions);
  }
  getPerson(id:number){
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` })
    };
    const url=`http://127.0.0.1:8000/api/getPerson/${id}`;
    return this.httpClient.get(url,httpOptions);
  }
  deletePerson(id:number){
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` })
    };
    const url=`http://127.0.0.1:8000/api/delete/${id}`
    return this.httpClient.delete(url,httpOptions);
  }
  addPerson(person:any){
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` })
    };
    const url="http://127.0.0.1:8000/api/make";
    this.httpClient.post(url,person,httpOptions).subscribe(data=>console.log(data));
  }
  updatePerson(person:any,id:number){
    console.log(person);
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` })
    };
    const url=`http://127.0.0.1:8000/api/update/${id}`;
    this.httpClient.patch(url,person,httpOptions).subscribe(data=>console.log(data));
  }
}

// interface GetResponsePerson{
//     persons:Person[];
// }