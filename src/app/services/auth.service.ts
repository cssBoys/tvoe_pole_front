import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Code, Token, User, UserRegistration} from '../shared/interfaces/interfaces';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subject = new Subject<string>()


  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: object) {}

  get token(): string {
    return ''
  }

  get hasToken() {
    return !!this.getItem('sessionId');
  }

  sendMessage(message: string) {
    this.subject.next(message)
  }


  registration(userRegistration: UserRegistration) {
    return this.http.post(`http://185.111.106.59/api/user/`, userRegistration)
  }

  login(user: User): Observable<any> {
   return this.http.post(`http://185.111.106.59/api/token/`, user)
  }

  logout() {
    localStorage.clear()
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  sendSms(telephone) {
    return this.http.post(`http://185.111.106.59/api/user/resend/`, telephone)
  }

  activateCode(code: Code) {
    return this.http.post(`http://185.111.106.59/api/user/code/`, code)
  }

  booking(token) {
    return this.http.post(`http://185.111.106.59/api/payment/`, token)
  }

  setToken(token) {
    this.setItem('sessionId', token);
  }

  setItem(index: string, item: any) {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.setItem(index, item);
    }
    return;
  }

  getItem(index: string) {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(index);
    }
    return;
  }

  getServerList(amount){
    return this.http.post(`http://185.111.106.59/api/payment/`, amount);
  }

  getUserInfo() {
    return this.http.get('http://185.111.106.59/api/user/me/')
  }

}
