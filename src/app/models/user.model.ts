import { IAccountUser } from './account.model';

// User info
export interface IUser {
  id: number;
  name: string;
  email: string;
  country: string;
  dateOfBirth: Date;
  accounts: IAccountUser[];
}
