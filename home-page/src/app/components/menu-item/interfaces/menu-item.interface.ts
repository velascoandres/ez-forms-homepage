export interface MenuItemInterface {
  title: string;
  description?: string;
  route: string;
  children?: MenuItemInterface[];
  root?: boolean;
}
