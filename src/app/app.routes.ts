import { Routes } from '@angular/router';
import { Landingpage } from './pages/landingpage/landingpage';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Homepage } from './pages/homepage/homepage';
import { List } from './pages/list/list';

export const routes: Routes = [
    {
        path:"" , component:Landingpage
    },
    {
        path:"login",component:Login
    },
    {
        path:"register",component:Register
    },
    {
        path:"home",component:Homepage
    },
    {
        path:"alldata",component:List
    }
];
