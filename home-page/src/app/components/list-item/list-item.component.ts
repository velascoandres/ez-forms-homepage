import { Component, OnInit, Input } from '@angular/core';
import { MenuItemInterface } from '../menu-item/interfaces/menu-item.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  items: MenuItemInterface[];

  constructor() { }

  ngOnInit(): void {
  }

}
