import {NgModule} from '@angular/core';
import {AddFootballFieldComponent} from './add-football-field.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AddFootballFieldComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: AddFootballFieldComponent}
    ])
  ]
})

export class AddFootballFieldModule {

}
