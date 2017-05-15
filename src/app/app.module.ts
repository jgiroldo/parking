import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing';

import { AppComponent } from './app.component';


import { AuthenticationModule }     from './security/authentication/authentication.module';
import { DashboardModule } from './dashboard/dashboard.module';

// User-made Services
import { GlobalService }  from './global.service';
import { LoginGuard }     from './login.guard';
import { LogoutGuard }    from './logout.guard';

// import { DashboardComponent }   from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AuthenticationModule,
    DashboardModule
  ],
  providers: [GlobalService, LoginGuard, LogoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
