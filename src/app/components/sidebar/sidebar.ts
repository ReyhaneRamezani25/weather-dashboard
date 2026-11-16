import { Component } from '@angular/core';
import {LucideLayoutDashboard,LucideMapPin,LucideSettings} from '@lucide/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  imports: [LucideLayoutDashboard,LucideMapPin,LucideSettings,RouterLink,RouterLinkActive],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {}
