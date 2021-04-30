import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Code, User, UserRegistration} from '../shared/interfaces/interfaces';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registration(userRegistration: UserRegistration) {
    return this.http.post(`http://185.111.106.59/api/user/`, userRegistration)
  }

  get token(): string {
    return ''
  }

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
   return this.http.post(`http://185.111.106.59/api/token/`, user)
  }

  logout() {

  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private setToken() {

  }

  sendSms(telephone) {
    return this.http.post(`http://185.111.106.59/api/user/resend/`, telephone)
  }

  activateCode(code: Code) {
    return this.http.post(`http://185.111.106.59/api/user/code/`, code)
  }
}
