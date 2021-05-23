import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ConfirmedValidator} from '../../services/confirmed.valiidator';
import {ModalService} from '../modal/modal.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  modalSms = false;
  hideRepeatPassword = true;
  hidePassword = true;

  constructor(private auth: AuthService, private fb: FormBuilder, private modal: ModalService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: new FormControl(null, [
        Validators.required
      ]),
      surname: new FormControl(null, [
        Validators.required,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)] ),
      confirmPassword: new FormControl(null, [
        Validators.required,
      ] ),
      phone: new FormControl(null, [
        Validators.required,
        Validators.minLength(10)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ])
    }, {
      validator: ConfirmedValidator('password', 'confirmPassword')
    })
  }

  get f(){
    return this.registrationForm.controls;
  }

  submitForm() {
    if (this.registrationForm.invalid) {
      return
    }
    let {email, password, phone, name, surname} = this.registrationForm.value
    phone = `+7${phone}`

    this.auth.registration({email, password, phone, name, surname}).subscribe(() => {
      this.registrationForm.reset()


      // this.auth.sendSms({phone: `+7${this.registrationForm.get('phone').value}`})
    })
    this.modalSms = true
  }

  closeModal(id: string) {
    this.modal.close(id);
  }
}
