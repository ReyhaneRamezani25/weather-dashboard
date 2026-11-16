import { Component } from '@angular/core';
import { LucideSearch, LucideMapPin } from '@lucide/angular';

@Component({
  imports: [LucideSearch,LucideMapPin],
  selector: 'app-dashboard-header',
  styleUrl: './dashboard-header.css',
  templateUrl: './dashboard-header.html',
})
export class DashboardHeader {}
