import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Result} from '../../shared/interfaces/interfaces';
import {FieldService} from '../../services/field.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  fields: Observable<Result>;
  searchStr = '';
  url = 'http://185.111.106.59'

  constructor(private fieldService: FieldService) { }
  ngOnInit() {
    this.fieldService.getAllFields().subscribe(data => {
      this.fields = data;
    });
  }

}
