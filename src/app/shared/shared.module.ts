import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { SendSmsComponent } from './send-sms/send-sms.component';
import {CommonModule} from '@angular/common';
import { CodeInputModule } from 'angular-code-input';
import {ModalComponent} from '../components/modal/modal.component';
import {SearchPipe} from './search.pipe';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  imports: [HttpClientModule, CommonModule, CodeInputModule.forRoot({
    codeLength: 4,
    isCharsCode: true,
    code: ''
  }),],
  exports: [HttpClientModule, SendSmsComponent, ModalComponent, SearchPipe, StarRatingComponent],
  declarations: [SendSmsComponent, ModalComponent, SearchPipe, StarRatingComponent]
})

export class SharedModule {

}
