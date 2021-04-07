import { Component, OnInit } from '@angular/core';
import {FIELDS} from '../../models/fields/fields';
import {Field} from '../../models/fields/field';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {

  constructor() { }
  fields = FIELDS;
  ngOnInit() {
  }

}
