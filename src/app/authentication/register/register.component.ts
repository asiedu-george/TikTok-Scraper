import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AuthenticationState} from "../store/auth.state";
import {Register} from "../../model/auth";
import {AuthenticationActions} from "../store/auth.actions";
import {selectLoading} from "../store/auth.selectors";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public signupForm: FormGroup;
  public loading = this.store.selectSignal(selectLoading);
  public showPassword:  boolean = false;

  constructor(private fb: FormBuilder, private store: Store<AuthenticationState>) {
    this.signupForm = this.fb.group({
      additional_properties: this.fb.group({
        phone_number: ['', Validators.required],
        date_of_birth: ['', Validators.required]
      }),
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onRegisterSubmit(): void {
    if (this.signupForm.valid) return

    const user: Register = this.signupForm.value
    this.store.dispatch(AuthenticationActions.register({user}))
  }

  public toggleShowPassword(): void {
    this.showPassword = !this.showPassword
  }

  public getControl(value: string) {
    return this.signupForm.get(value)
  }
}
