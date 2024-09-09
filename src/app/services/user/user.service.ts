import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPassword, IUserInfo } from '../../models/user.model';
import { userAPI } from '../constantsAPI';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  userInfo(): Observable<IUserInfo> {
    return this.http.get<IUserInfo>(`${userAPI}/info`);
  }

  updatePassword(data: IPassword): Observable<string> {
    return this.http.put<string>(`${userAPI}/update-password`, data);
  }
}
