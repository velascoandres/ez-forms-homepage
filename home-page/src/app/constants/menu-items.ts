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
        route: 'installation'
      }
    ],
  },
  {

    id: 3,
    title: 'Forms Controls',
    route: 'forms-controls',
    root: true,
    children: [
      {

        id: 4,
        title: 'Text',
        route: 'text-input'
      },
      {

        id: 5,
        title: 'AutoComplete',
        route: 'autoComplete'
      },
      {

        id: 6,
        title: 'Date',
        route: 'date-input'
      },
      {

        id: 7,
        title: 'Select',
        route: 'select'
      },
      {

        id: 8,
        title: 'CheckBox',
        route: 'checkbox'
      },
      {

        id: 9,
        title: 'Radio Button',
        route: 'radio-button'
      },
      {

        id: 10,
        title: 'Files',
        route: 'files',
        children: [
          {

            id: 11,
            title: 'Single File',
            route: 'single-file',
          },
          {

            id: 12,
            title: 'Multiple File',
            route: 'single-file',
          }
        ]
      },
    ]
  },
]
