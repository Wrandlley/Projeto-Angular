import { Routes } from '@angular/router';
import { Novo } from './pages/novo/novo';
import { Sale } from './pages/sale/sale';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },

  {
    path: 'home',
    component: Home
  },

  {
    path: 'sale',
    component: Sale
  },

  {
    path: 'novo',
    component: Novo
  },

];
