// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Exercice1Component } from './header/exercice1.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';


@NgModule({
  declarations: [
    AppComponent,
    Exercice1Component,
    LoginComponent,
    ClientComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
