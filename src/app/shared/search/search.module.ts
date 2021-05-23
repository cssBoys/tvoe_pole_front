import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SearchComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: SearchComponent,
            }
        ]),
        SharedModule,
        FormsModule,
    ]
})
export class SearchModule {
}
