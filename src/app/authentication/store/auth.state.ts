import {AuthResponse, LoginResponse} from "../../model/auth";

export interface AuthenticationState {
  loading: boolean;
  error: string | null;
  userData: LoginResponse | null;
  message: AuthResponse | null;
}
