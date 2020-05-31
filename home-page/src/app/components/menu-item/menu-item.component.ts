import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItemInterface } from './interfaces/menu-item.interface';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input()
  menuItem: MenuItemInterface;

  currentItemValue: number;

  displayChildren = false;

  @Output()
  currentItem: EventEmitter<number> = new EventEmitter<number>();

  selected = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(): void {
    this.selected = !this.selected;
    setTimeout(() => {
      this.selected = false;
    }, 500);
    this.emitItem();
    this.swichtChildren();
  }

  swichtChildren() {
    this.displayChildren = !this.displayChildren;
  }

  emitItem() {
    this.currentItem.emit(this.menuItem.id);
  }

  listenItem(event: number) {
    this.currentItemValue = event;
  }

}
