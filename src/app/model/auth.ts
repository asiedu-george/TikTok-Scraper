export interface Register {
  additional_properties: {
    phone_number: string,
    date_of_birth: string
  },
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface AuthResponse {
  message: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  login_token: string;
  refresh_token: string;
}

export interface UserProfile {
  additional_properties: {
    phone_number: string,
    date_of_birth: string,
    gender: string
  },
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface UpdatePassword {
  old_password: string;
  new_password: string;
}
