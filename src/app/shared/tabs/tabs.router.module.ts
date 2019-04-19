import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//routes tabs
import { UserRoutes } from './routes/user.router';
import { EmployeeRoutes } from './routes/employee.router';
import { CompanyRoutes } from './routes/company.router';

const AppRoutes = {
  user: UserRoutes,
  employee: EmployeeRoutes,
  company: CompanyRoutes,
};

@NgModule({
  imports: [
    RouterModule.forChild(AppRoutes.user)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
