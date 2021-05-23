import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Playgrounds, ReviewInfo} from '../shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  constructor(private http: HttpClient) { }

  getAllFields(): Observable<any> {
    return this.http.get('http://185.111.106.59/api/playground/');
  }

  byCategory() {
    return this.http.get<Playgrounds>('http://185.111.106.59/api/category/')
  }

  playgroundsDetail(id) {
    return this.http.get(`http://185.111.106.59/api/playground/${id}/`)
  }

  sendReview(data: ReviewInfo) {
    return this.http.post('http://185.111.106.59/api/review/', data)
  }
}
