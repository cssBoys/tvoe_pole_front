import { Component, OnInit } from '@angular/core';
import {FIELDS} from '../../models/fields/fields';
import {Field} from '../../models/fields/field';
import {Router} from '@angular/router';
import {BookingService} from '../../services/booking.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {

  constructor(private router: Router, private bookingService: BookingService) { }
  fields = FIELDS;
  ngOnInit() {
  }

  getFieldDetails(item: any) {
    console.log(item);
    this.router.navigate(['/booking-history/booking']);
    this.bookingService.data = item;

  }

}
