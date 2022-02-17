import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingPersonComponent } from './components/adding-person/adding-person.component';
import { ListOfPersonsComponent } from './components/list-of-persons/list-of-persons.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path:'',component:LoginLayoutComponent},
  {path:'persons',component:ListOfPersonsComponent},
  {path:'updateperson/:id/:name/:age/:job',component:UpdateComponent},  
  {path:'addperson',component:AddingPersonComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
