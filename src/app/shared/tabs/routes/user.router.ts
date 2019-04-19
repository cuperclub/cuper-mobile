import { Routes } from '@angular/router';
import { TabsPage } from '../tabs.page';

export const UserRoutes: Routes = [
  {
    path: 'user',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../../pages/user/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'wallet',
        children: [
          {
            path: '',
            loadChildren: '../../pages/user/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../../pages/user/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/user/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/user/home',
    pathMatch: 'full'
  }
];
