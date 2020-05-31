import { Pipe, PipeTransform } from '@angular/core';
import { MenuItemInterface } from '../components/menu-item/interfaces/menu-item.interface';

@Pipe({
  name: 'hasChildren'
})
export class HasChildrenPipe implements PipeTransform {

  transform(menuItem: MenuItemInterface): boolean {
    return menuItem.children && menuItem.children.length > 0;
  }

}
