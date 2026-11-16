import { Component } from '@angular/core';
import {DashboardHeader} from '../dashboard-header/dashboard-header';
@Component({
  imports: [DashboardHeader],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {}
