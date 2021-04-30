import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { SendSmsComponent } from './send-sms/send-sms.component';
import {CommonModule} from '@angular/common';
import { CodeInputModule } from 'angular-code-input';

@NgModule({
  imports: [HttpClientModule, CommonModule, CodeInputModule.forRoot({
    codeLength: 4,
    isCharsCode: true,
    code: '7777'
  })],
  exports: [HttpClientModule, SendSmsComponent],
  declarations: [SendSmsComponent]
})

export class SharedModule {

}
