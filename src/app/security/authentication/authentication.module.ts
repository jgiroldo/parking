import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MaterialModule } from '@angular/material';
import { AuthenticationService } from './services/authentication.service';

import { AuthenticationComponent} from './index';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [AuthenticationComponent],
  exports: [AuthenticationComponent],
  providers: [AuthenticationService]
})
export class AuthenticationModule { }
