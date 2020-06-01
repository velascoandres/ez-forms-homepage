import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItemInterface } from './interfaces/menu-item.interface';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private readonly router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  changeStatus(): void {
    this.selected = !this.selected;
    setTimeout(() => {
      this.selected = false;
    }, 500);
    this.emitItem();
    this.swichtChildren();
    this.navigaToRoute();

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

  private navigaToRoute() {
    const url = this.menuItem.route;
    this.router.navigate([url]);
  }

}
