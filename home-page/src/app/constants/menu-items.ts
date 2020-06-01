import { MenuItemInterface } from '../components/menu-item/interfaces/menu-item.interface';

export const MENU_ITEMS: MenuItemInterface[] = [
  {
    id: 1,
    title: 'Getting Started',
    route: 'getting-started',
    root: true,
    children: [
      {
        id: 2,
        title: 'Installation',
        route: 'getting-started/installation'
      }
    ],
  },
  {

    id: 3,
    title: 'Forms Controls',
    route: 'form-controls',
    root: true,
    children: [
      {

        id: 4,
        title: 'Text',
        route: 'form-controls/text-input'
      },
      {

        id: 5,
        title: 'AutoComplete',
        route: 'form-controls/autoComplete'
      },
      {

        id: 6,
        title: 'Date',
        route: 'form-controls/date-input'
      },
      {

        id: 7,
        title: 'Select',
        route: 'form-controls/select'
      },
      {

        id: 8,
        title: 'CheckBox',
        route: 'form-controls/checkbox'
      },
      {

        id: 9,
        title: 'Radio Button',
        route: 'form-controls/radio-button'
      },
      {

        id: 10,
        title: 'Files',
        route: 'form-controls/files'
      },
    ]
  },
]
