import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {EditComponent} from './components/edit/edit.component';
import { MainComponent } from './shared/main/main.component';
import {BookingComponent} from './components/booking/booking.component';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
import { PromoCodeComponent } from './components/promo-code/promo-code.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    EditComponent,
    MainComponent,
    BookingComponent,
    BookingHistoryComponent,
    PromoCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
