import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxMaskModule, IConfig} from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {EditComponent} from './components/edit/edit.component';
import {BookingComponent} from './components/booking/booking.component';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
import { PromoCodeComponent } from './components/promo-code/promo-code.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CheckComponent } from './components/check/check.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import { FilterComponent } from './components/filter/filter.component';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { PlaygroundDetailComponent } from './components/playground-detail/playground-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    EditComponent,
    BookingComponent,
    BookingHistoryComponent,
    PromoCodeComponent,
    ContactsComponent,
    CheckComponent,
    FilterComponent,
    PlaygroundDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    Ng2SearchPipeModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
