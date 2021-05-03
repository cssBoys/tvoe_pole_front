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
  url;
  constructor(private fieldService: FieldService) { }
  ngOnInit() {
    this.url = this.fieldService.url;
    this.fieldService.getAllFields().subscribe(data => {
      this.fields = data;
    });
  }

}
