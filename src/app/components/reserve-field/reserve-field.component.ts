import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IMyDpOptions} from 'mydatepicker';
import {FieldService} from '../../services/field.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reserve-field',
  templateUrl: './reserve-field.component.html',
  styleUrls: ['./reserve-field.component.scss']
})
export class ReserveFieldComponent implements OnInit {
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
    disableDateRanges: [{begin: {year: 2021, month: 1, day: 1}, end: {year: 2021, month: 6, day: 2}}]
  };

  private placeholder: string = 'Выберите дату';

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      // Empty string or null means no initial value. Can be also specific date for
      // example: {date: {year: 2018, month: 10, day: 9}} which sets this date to initial
      // value.

      myDate: [null, Validators.required]
      // other controls are here...
    });
  }

  setDate(): void {
    // Set today date using the patchValue function
    let date = new Date();
    this.myForm.patchValue({myDate: {
        date: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()}
      }});
  }

  clearDate(): void {
    // Clear the date using the patchValue function
    this.myForm.patchValue({myDate: null});
  }

  finish() {
    this.router.navigate(['confirmation'])
  }
}
