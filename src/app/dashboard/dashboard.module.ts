import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { SearchVacancyComponent } from '../vacancy/search-vacancy/search-vacancy.component';
import { NewEntryComponent } from '../vacancy/new-entry/new-entry.component';
import { CloseStayComponent } from '../vacancy/close-stay/close-stay.component';
import { ReportsComponent } from '../vacancy/reports/reports.component';
import { OccurrenceComponent } from '../vacancy/occurrence/occurrence.component';
import { GifComponent } from '../vacancy/gif.component';
import { VacancyService } from '../vacancy/vacancy.service';


@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: [DashboardComponent, SearchVacancyComponent, NewEntryComponent, CloseStayComponent, ReportsComponent, OccurrenceComponent, GifComponent],
  exports: [DashboardComponent, SearchVacancyComponent, NewEntryComponent, CloseStayComponent, ReportsComponent, OccurrenceComponent, GifComponent],
  providers: [VacancyService]
})

export class DashboardModule { }
