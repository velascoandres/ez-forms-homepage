export interface MenuItemInterface {
  id?: number;
  title: string;
  description?: string;
  route: string;
  children?: MenuItemInterface[];
  root?: boolean;
}
