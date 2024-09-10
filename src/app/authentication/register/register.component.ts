import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AuthenticationState} from '../store/auth.state';
import {Register} from '../../model/auth';
import {AuthenticationActions} from '../store/auth.actions';
import {selectLoading} from '../store/auth.selectors';
import {nameValidator} from '../../validators/nameValidator';
import {emailValidator} from '../../validators/emailValidator';
import {passwordValidator} from '../../validators/passwordValidator';

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
      first_name: ['', [Validators.required, nameValidator()]],
      last_name: ['', [Validators.required, nameValidator()]],
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required, passwordValidator()]]
    })
  }

  onRegisterSubmit(): void {
    if (this.signupForm.invalid) return;

    const user: Register = this.signupForm.value;
    this.store.dispatch(AuthenticationActions.register({user}));
    this.signupForm.reset();
  }

  public toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  public getControl(value: string) {
    return this.signupForm.get(value);
  }
}
