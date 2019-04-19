import { Routes } from '@angular/router';
import { TabsPage } from '../tabs.page';

export const EmployeeRoutes: Routes = [
  {
    path: 'employee',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../../pages/employee/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'wallet',
        children: [
          {
            path: '',
            loadChildren: '../../pages/employee/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../../pages/employee/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/employee/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/employee/home',
    pathMatch: 'full'
  }
];
