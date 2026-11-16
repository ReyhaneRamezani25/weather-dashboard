import { Component } from '@angular/core';
import {LucideLayoutDashboard,LucideMapPin,LucideSettings} from '@lucide/angular';
@Component({
  imports: [LucideLayoutDashboard,LucideMapPin,LucideSettings],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {}
