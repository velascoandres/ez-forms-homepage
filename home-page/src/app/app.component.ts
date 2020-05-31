import { Component } from '@angular/core';
import { MENU_ITEMS } from './constants/menu-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems = MENU_ITEMS;
  title = 'home-page';
}
