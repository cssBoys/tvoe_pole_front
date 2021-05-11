import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  url = `http://185.111.106.59/`;
  constructor(private http: HttpClient) { }

  getAllFields(): Observable<any> {
    return this.http.get(this.url + `api/category/`);
  }
}
