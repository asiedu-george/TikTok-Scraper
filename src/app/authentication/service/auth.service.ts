import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../../environments/environment'
import {AuthResponse, Login, LoginResponse, Register, UpdatePassword, UserProfile} from "../../model/auth";
import {take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authUrl = environment.authUrl

  constructor(private http: HttpClient) {}

  register(user: Register) {
    return this.http.post<AuthResponse>(`${environment.authUrl}user/signup`, user)
      .pipe(take(1))
  }

  login(user: Login) {
    return this.http.post<LoginResponse>(`${environment.authUrl}user/login`, user)
      .pipe(take(1))
  }

  validate() {
    return this.http.get<AuthResponse>(`${environment.authUrl}user/validate`)
      .pipe(take(1))
  }

  updatePassword(password: UpdatePassword) {
    return this.http.post<AuthResponse>(`${environment.authUrl}user/update-password`, password)
      .pipe(take(1))
  }

  refreshToken(refresh_token: string) {
    return this.http.post<LoginResponse>(`${environment.authUrl}user/refresh_token`, refresh_token)
      .pipe(take(1))
  }

  userProfile() {
    return this.http.get<UserProfile>(`${environment.authUrl}user/profile`)
  }

  updateProfile(profile: UserProfile) {
    return this.http.put<UserProfile>(`${environment.authUrl}user/profile`, profile)
      .pipe(take(1))
  }
}
