import { Component, OnInit } from '@angular/core';
import {PROMOCODES} from '../../models/promo-codes/promo-codes';

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
  styleUrls: ['./promo-code.component.scss']
})
export class PromoCodeComponent implements OnInit {

  constructor() { }
  promocodes = PROMOCODES;
  ngOnInit() {
  }
  public isExists() {
    if (this.promocodes.length > 0) {
      return true;
    } else { return false; }
}

}
