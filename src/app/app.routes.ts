import { Routes } from '@angular/router';
import {Dashboard} from './components/dashboard/dashboard';
import {SavedLoactions} from './components/saved-loactions/saved-loactions';
import {Settings} from './components/settings/settings';
export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: Dashboard},
    {path : 'savedlocations', component : SavedLoactions},
    {path : 'settings', component : Settings}
];
