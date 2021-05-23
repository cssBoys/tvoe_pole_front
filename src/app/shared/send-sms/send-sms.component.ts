import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {CodeInputComponent} from 'angular-code-input';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.scss']
})
export class SendSmsComponent implements OnInit {
  @ViewChild('codeInput') codeInput !: CodeInputComponent;
  @Output() close = new EventEmitter();

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onCodeCompleted(code: string) {
    let id = 2
    this.auth.sendSms({id, code}).subscribe(() => {
      console.log(code);
    })
    this.codeInput.reset();
    this.close.emit()
  }

}
