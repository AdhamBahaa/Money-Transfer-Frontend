//Create new User
export interface ICreateNewAuth {
  name: string;
  email: string;
  password: string;
  country: string;
  dateOfBirth: Date;
}

// the data that will be send after I created the user
export interface IAuthCreated {
  id: number;
  name: string;
  email: string;
  country: string;
}

// the data that will be logged in
export interface ILogin {
  email: string;
  password: string;
}

// No models for logout and refresh

export interface IResponseTokens {
  refreshToken: string;
  accessToken: string;
}
