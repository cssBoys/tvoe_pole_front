import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginComponent} from './components/login/login.component';
import {EditComponent} from './components/edit/edit.component';
import {BookingComponent} from './components/booking/booking.component';
import {BookingHistoryComponent} from './components/booking-history/booking-history.component';
import {PromoCodeComponent} from './components/promo-code/promo-code.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {CheckComponent} from './components/check/check.component';
import {FilterComponent} from './components/filter/filter.component';


const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'edit', component: EditComponent},
  { path: 'booking-history/booking', component: BookingComponent},
  { path: 'booking-history', component: BookingHistoryComponent},
  { path: 'promo-codes', component: PromoCodeComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'check', component: CheckComponent},
  { path: 'search', component: FilterComponent},
  {
    path: 'add',
    loadChildren: () => import('./components/add-footbal-field/add-football-field.module').then(m => m.AddFootballFieldModule)},
  {
    path: '',
    loadChildren: () => import('./shared/search/search.module').then(m => m.SearchModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
