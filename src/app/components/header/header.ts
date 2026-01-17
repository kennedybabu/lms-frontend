import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-header',
  imports: [
    DrawerModule,
    RouterLink
],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  sideBarShowing: boolean = false;

  toggleSidebar() {
    this.sideBarShowing = !this.sideBarShowing
  }


}
