import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginComponent} from './components/login/login.component';
import {EditComponent} from './components/edit/edit.component';
import {BookingComponent} from './components/booking/booking.component';
import {BookingHistoryComponent} from './components/booking-history/booking-history.component';
import {PromoCodeComponent} from './components/promo-code/promo-code.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {CheckComponent} from './components/check/check.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'edit', component: EditComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'booking-history', component: BookingHistoryComponent},
  { path: 'promo-codes', component: PromoCodeComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'check', component: CheckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
