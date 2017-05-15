import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginGuard }               from './login.guard';
import { AuthenticationRoutes }     from "./security/authentication/index";
import { DashboardRoutes } from './dashboard/dashboard.routes';
// import { RegistrationRoutingModule }     from "./registration/index";



const appRoutes: Routes = [
  {path: '', redirectTo:'dashboard', pathMatch:'full'},
    ...DashboardRoutes,
    ...AuthenticationRoutes,
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: []
})

export class AppRoutingModule { }
