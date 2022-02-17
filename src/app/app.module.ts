import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfPersonsComponent } from './components/list-of-persons/list-of-persons.component';
import { AddingPersonComponent } from './components/adding-person/adding-person.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { UpdateComponent } from './components/update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    ListOfPersonsComponent,
    AddingPersonComponent,
    LoginLayoutComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
