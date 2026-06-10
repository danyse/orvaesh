import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { HomeViewComponent } from './components/home-view.component/home-view.component';

export const routes: Routes = [
      { path: '', component: HomeViewComponent },
         { path: 'home', component: HomeViewComponent },
];
