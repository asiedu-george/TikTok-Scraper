import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthenticationRoutingModule} from "./authentication-routing.module";
import {RouterLink} from "@angular/router";
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    RouterLink,
    NgxSpinnerModule
  ]
})
export class AuthenticationModule { }
