import { Component, OnInit, Input } from '@angular/core';
import { MenuItemInterface } from './interfaces/menu-item.interface';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input()
  menuItem: MenuItemInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
