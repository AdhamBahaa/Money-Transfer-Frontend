import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IAccount,
  IAccountUser,
  IBalance,
  ICreateAccount,
  ITransaction,
  ITransactionResponse,
} from '../../models/account.model';
import { accountAPI } from '../constantsAPI';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  viewUserAccount(): Observable<IAccount[]> {
    return this.http.get<IAccount[]>(`${accountAPI}/ViewUserAccount`);
  }

  getAccountById(accountId: number): Observable<IAccount> {
    return this.http.get<IAccount>(`${accountAPI}/GetAccountByID/${accountId}`);
  }

  getAccountByBalance(accountId: number): Observable<IBalance> {
    return this.http.get<IBalance>(
      `${accountAPI}/GetAccountBalance/${accountId}`
    );
  }

  createAccount(data: ICreateAccount): Observable<IAccountUser> {
    return this.http.post<IAccountUser>(`${accountAPI}/create`, data);
  }

  createTransaction(data: ITransaction): Observable<ITransactionResponse> {
    return this.http.post<ITransactionResponse>(
      `${accountAPI}/transaction`,
      data
    );
  }
}
