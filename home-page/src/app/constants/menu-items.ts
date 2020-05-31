import { MenuItemInterface } from '../components/menu-item/interfaces/menu-item.interface';

export const MENU_ITEMS: MenuItemInterface[] = [
  {
    title: 'Getting Started',
    route: 'getting-started',
    root: true,
    children: [
      {
        title: 'Installation',
        route: 'installation'
      }
    ],
  },
  {
    title: 'Forms Controls',
    route: 'forms-controls',
    root: true,
    children: [
      {
        title: 'Text',
        route: 'text-input'
      },
      {
        title: 'AutoComplete',
        route: 'autoComplete'
      },
      {
        title: 'Date',
        route: 'date-input'
      },
      {
        title: 'Select',
        route: 'select'
      },
      {
        title: 'CheckBox',
        route: 'checkbox'
      },
      {
        title: 'Radio Button',
        route: 'radio-button'
      },
      {
        title: 'Files',
        route: 'files',
        children: [
          {
            title: 'Single File',
            route: 'single-file',
          },
          {
            title: 'Multiple File',
            route: 'single-file',
          }
        ]
      },
    ]
  },
]
