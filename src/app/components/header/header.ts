import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';


@Component({
  selector: 'app-header',
  imports: [
    DrawerModule
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
