import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { SearchVacancyComponent } from '../vacancy/search-vacancy/search-vacancy.component';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: [DashboardComponent,SearchVacancyComponent],
  exports: [DashboardComponent,SearchVacancyComponent],
})

export class DashboardModule { }
