import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Playgrounds} from '../../shared/interfaces/interfaces';
import {FieldService} from '../../services/field.service';
import {FormControl, FormGroup} from '@angular/forms';
import {concatAll, mergeAll, tap} from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  fields: Observable<Playgrounds>;
  url;
  searchText;
  id;
  test: any;
  i = 0;

  category: number;
  fieldsType = new FormGroup({
    type: new FormControl(''),
  });
  fieldsRating = new FormGroup({
    rating: new FormControl(''),
  });
  fieldsCost = new FormGroup({
    low: new FormControl(false),
    middle: new FormControl(false),
    expensive: new FormControl(false),
  });
  // Filters
  fieldType;
  fieldRating = 0;
  constructor(private fieldService: FieldService) { }
  ngOnInit() {
    this.id = 0;
    this.url = this.fieldService.url;
    this.fieldService.getAllFields().subscribe(data => {
      this.fields = data;
    });
    if (this.fieldsType.value.type === 'All') {
      this.fieldsType.value.type = null;
    }
  }

  //filter functions
  best() {
      this.fieldRating = 4.9;
      console.log(this.fieldRating);
  }
  good() {
    this.fieldRating = 4.5;
    console.log(this.fieldRating);
  }
  all() {
    this.fieldRating = 0;
    console.log(this.fieldRating);
  }



}
