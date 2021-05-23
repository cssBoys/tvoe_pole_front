import {Component, OnInit} from '@angular/core';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BookingService} from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  name: string;
  address: string;
  date: any;

  constructor(private bookingService: BookingService) { }
  ngOnInit() {
    this.name = this.bookingService.data.name;
    this.address = this.bookingService.data.address;
    this.date = new Date(this.bookingService.data.date);;
    console.log(this.date.getDay());
  }

}
