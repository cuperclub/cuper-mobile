import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//routes tabs
import { UserRoutes } from './routes/user.router';
import { EmployerRoutes } from './routes/employer.router';
import { CompanyRoutes } from './routes/company.router';

const AppRoutes = {
  user: UserRoutes,
  employer: EmployerRoutes,
  company: CompanyRoutes,
};

@NgModule({
  imports: [
    RouterModule.forChild(AppRoutes.user)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
