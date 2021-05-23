import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User, UserInfo} from '../../shared/interfaces/interfaces';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidePassword = true;

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

    this.auth.login({phone: `+7${phone}`, password}).subscribe((res) => {
      console.log(res);
      this.handleResponse(res)
      // let success = res.access
      // this.auth.setItem('success' , success)
      // this.form.reset()
      // this.router.navigate([''])
    })
    // this.auth.getUserInfo().subscribe((data: UserInfo) => {
    //   let name = data.name
    //   this.auth.setItem('name', JSON.stringify(name));
    //   console.log(data);
    // })
  }
  handleResponse(data){
    let success = data.access
    this.auth.setItem('success' , success)
    this.form.reset()
    this.auth.getUserInfo().subscribe((data: UserInfo) => {
      let name = data.name
      this.auth.setItem('name', JSON.stringify(name));
      console.log(data);
    })
    this.router.navigate([''])
  }


}
