import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment'
import {AuthResponse, Login, LoginResponse, Register, UpdatePassword, UserProfile} from '../../model/auth';
import {Store} from '@ngrx/store';
import {AuthenticationState} from '../store/auth.state';
import {selectRefreshToken} from '../store/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = environment.authUrl;
  private token = this.store.selectSignal(selectRefreshToken);

  public constructor(private http: HttpClient, private store: Store<AuthenticationState>) {}

  public register(user: Register) {
    return this.http.post<AuthResponse>(`${environment.authUrl}user/signup`, user)
  }

  public login(user: Login) {
    return this.http.post<LoginResponse>(`${environment.authUrl}user/login`, user)
  }

  public validate() {
    return this.http.get<AuthResponse>(`${environment.authUrl}user/validate`)
  }

  public updatePassword(password: UpdatePassword) {
    return this.http.post<AuthResponse>(`${environment.authUrl}user/update-password`, password)
  }

  public refreshToken() {
    return this.http.post<LoginResponse>(
      `${environment.authUrl}user/refresh_token`,
      {refreshToken: this.token() }
    )
  }

  public userProfile() {
    return this.http.get<UserProfile>(`${environment.authUrl}user/profile`)
  }

  public updateProfile(profile: UserProfile) {
    return this.http.put<UserProfile>(`${environment.authUrl}user/profile`, profile)
  }
}
