import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { LoginGuard } from '../login.guard';
import { LogoutGuard } from '../logout.guard';

import { SearchVacancyComponent } from '../vacancy/search-vacancy/search-vacancy.component';
import { NewEntryComponent } from '../vacancy/new-entry/new-entry.component';
import { CloseStayComponent } from '../vacancy/close-stay/close-stay.component';
import { OccurrenceComponent } from '../vacancy/occurrence/occurrence.component';
import { ReportsComponent } from '../vacancy/reports/reports.component';
import { GifComponent} from '../vacancy/gif.component';

export const DashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        component: GifComponent,
        canActivate: [LoginGuard]
      }
      ,
      {
        path: 'search-vacancy',
        component: SearchVacancyComponent,
        canActivate: [LoginGuard]
      }
      , {
        path: 'new-entry',
        component: NewEntryComponent,
        canActivate: [LoginGuard]
      }
      , {
        path: 'close-stay',
        component: CloseStayComponent,
        canActivate: [LoginGuard]
      }
      , {
        path: 'occurrence',
        component: OccurrenceComponent,
        canActivate: [LoginGuard]
      }
      , {
        path: 'reports',
        component: ReportsComponent,
        canActivate: [LoginGuard]
      }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(DashboardRoutes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
