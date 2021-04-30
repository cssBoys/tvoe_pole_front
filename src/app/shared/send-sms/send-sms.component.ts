import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {CodeInputComponent} from 'angular-code-input';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.scss']
})
export class SendSmsComponent implements OnInit {
  @ViewChild('codeInput') codeInput !: CodeInputComponent;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onCodeChanged(code: string) {
  }

  onCodeCompleted(code: string) {
    let id = 2
    this.auth.activateCode({id, code}).subscribe(() => {
      console.log(code);
    })
  }


}
