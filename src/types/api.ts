export interface IAuthFlowData {
  access_token: string;
  expires_in: number;
  scope: string;
  refresh_token: string;
  token_type: string;
}

export interface ISuccessfulLoginData {
  customer: {
    addresses: [];
    email: string;
    firstName: string;
    id: string;
    isEmailVerified: false;
    lastName: string;
    password: string;
    version: number;
    createdAt: string;
    lastModifiedAt: string;
    authenticationMode: string;
  };
}
