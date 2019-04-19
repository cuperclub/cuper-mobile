import { Routes } from '@angular/router';
import { TabsPage } from '../tabs.page';

export const CompanyRoutes: Routes = [
  {
    path: 'company',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../../pages/company/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'wallet',
        children: [
          {
            path: '',
            loadChildren: '../../pages/company/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../../pages/company/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/company/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/company/home',
    pathMatch: 'full'
  }
];
