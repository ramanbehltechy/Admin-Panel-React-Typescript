// assets
 import { IconKey } from '@tabler/icons-react';
 import { RootState } from '../store/reducer';
import { useSelector } from 'react-redux';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //
const isAuthenticated=true;
const pages = {
  
  id: 'pages',
  title: 'Pages',
  caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'collapse',
      icon: icons.IconKey,

      children: isAuthenticated
      ? [
          {
            id: 'login3',
            title: 'Login',
            type: 'item',
            url: '/pages/login/login3',
            target: true,
          },
          {
            id: 'register3',
            title: 'Register',
            type: 'item',
            url: '/pages/register/register3',
            target: true,
          },
        ]
      : [
        ],
    }
  ]
};

export default pages;

