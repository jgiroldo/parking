import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { LoginGuard } from '../login.guard';
import { LogoutGuard } from '../logout.guard';

import { SearchVacancyComponent } from '../vacancy/search-vacancy/search-vacancy.component';

export const DashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'search-vacancy',
        component: SearchVacancyComponent,
        canActivate: [LoginGuard]
      }
      // , {
      //   path: 'registration/search',
      //   component: RegistrationSearchComponent,
      //   canActivate: [LoginGuard]
      // }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(DashboardRoutes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
