import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './home/login/login.component';
import { FlightSearchComponentComponent } from './ui/search/flight-search.component/flight-search.component.component';
import { SearchResultComponent } from './ui/search/search-result/search-result.component';
import { PassengerDetailsComponent } from './ui/Booking/passenger-details/passenger-details.component';
import { SsrDetailsComponent } from './ui/search/ssr-details/ssr-details.component';


export const routes: Routes = [
    { path: 'home-component', component: HomeComponent },
    { path: 'login-component', component: LoginComponent },
    { path: 'search-result-component', component: FlightSearchComponentComponent },
    { path: 'result-component', component: SearchResultComponent },
    { path: 'passenger-details-component', component: PassengerDetailsComponent},
    { path: 'ssr-details-component', component: SsrDetailsComponent},
    
  ];
  //{ path: '', component: HomeComponent },
  // { path: '**', redirectTo: '/', pathMatch: 'full' }