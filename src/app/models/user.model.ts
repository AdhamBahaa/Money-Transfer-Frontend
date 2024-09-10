import { IAccountUser } from './account.model';

// User info
export interface IUserInfo {
  id: number;
  name: string;
  email: string;
  country: string;
  dateOfBirth: Date;
  accounts: IAccountUser[];
}

export interface IPassword {
  oldPassword: string;
  newPassword: string;
}
