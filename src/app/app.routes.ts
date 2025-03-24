import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'home',
        loadComponent: ()=> import('./pages/home/home.component')
    },
    {
        path: 'users',
        title: 'users',
        loadComponent: ()=> import('./pages/users/users.component')
    }

];
