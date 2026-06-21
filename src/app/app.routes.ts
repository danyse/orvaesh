import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { HomeViewComponent } from './components/home-view.component/home-view.component';
import { MobileHomeComponent } from './components/mobile/mobile-home.component/mobile-home.component';

export const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'home', component: HomeViewComponent },
  { path: 'mobile', component: MobileHomeComponent }
];
