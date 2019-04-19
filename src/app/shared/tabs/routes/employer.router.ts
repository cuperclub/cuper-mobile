import { Routes } from '@angular/router';
import { TabsPage } from '../tabs.page';

export const EmployerRoutes: Routes = [
  {
    path: 'employer',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../../pages/employer/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'wallet',
        children: [
          {
            path: '',
            loadChildren: '../../pages/employer/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../../pages/employer/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/employer/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/employer/home',
    pathMatch: 'full'
  }
];
