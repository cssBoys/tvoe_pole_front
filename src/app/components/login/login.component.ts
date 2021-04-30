import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/interfaces/interfaces';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      phone: new FormControl(null, [
        Validators.required,
        Validators.minLength(10)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    let {phone, password} = this.form.value;
    password = password.charAt(0).toUpperCase() + password. substr(1)

    this.auth.login({phone: `+7${phone}`, password}).subscribe(() => {
      this.form.reset()
      this.router.navigate([''])
    })
  }

}
