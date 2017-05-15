import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { LoginGuard } from '../login.guard';
import { LogoutGuard } from '../logout.guard';

export const DashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard]
    // children: [
    //   {
    //     path: 'registration',
    //     component: RegistrationListComponent,
    //     children: [
    //       { path: 'in-progress', pathMatch: 'full', component: InProgressComponent },
    //       { path: 'pld', pathMatch: 'full', component: IntegrationErrorsComponent },
    //       { path: 'serasa', pathMatch: 'full', component: IntegrationErrorsComponent },
    //       { path: 'data-validation', pathMatch: 'full', component: DataValidationComponent },
    //       { path: 'integration-errors', pathMatch: 'full', component: IntegrationErrorsComponent },
    //     ],
    //     canActivate: [LoginGuard]
    //   }, {
    //     path: 'registration/search',
    //     component: RegistrationSearchComponent,
    //     canActivate: [LoginGuard]
    //   }
    // ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(DashboardRoutes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
