import { Component, OnInit } from '@angular/core';
import {FieldService} from '../../services/field.service';

@Component({
  selector: 'app-finished-reserve',
  templateUrl: './finished-reserve.component.html',
  styleUrls: ['./finished-reserve.component.scss']
})
export class FinishedReserveComponent implements OnInit {

  constructor(private field: FieldService) { }

  ngOnInit() {
  }

  reserveField() {
    this.field.reserve().subscribe(data => {
      console.log(data);
    })
  }

}
