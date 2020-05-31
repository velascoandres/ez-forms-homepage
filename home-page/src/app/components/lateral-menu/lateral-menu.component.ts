import { Component, OnInit, Input } from '@angular/core';
import { MENU_ITEMS } from 'src/app/constants/menu-items';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css']
})
export class LateralMenuComponent implements OnInit {
  menuItems = MENU_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
