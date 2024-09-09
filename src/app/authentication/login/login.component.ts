import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthenticationState} from "../store/auth.state";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Login} from "../../model/auth";
import {AuthenticationActions} from "../store/auth.actions";
import {selectLoading} from "../store/auth.selectors";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm: FormGroup;
  public showPassword:  boolean = false;
  public loading = this.store.selectSignal(selectLoading);

  constructor(private store: Store<AuthenticationState>, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  public onLoginSubmit(): void {
    if(this.loginForm.invalid) return

    const user: Login = this.loginForm.value
    this.store.dispatch(AuthenticationActions.login({user}))
  }

  public toggleShowPassword(): void {
    this.showPassword = !this.showPassword
  }

  public getControl(value: string) {
    return this.loginForm.get(value)
  }
}
