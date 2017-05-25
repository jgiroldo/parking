import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

import { VacancyService } from '../vacancy.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['../vacancy.css']
})
export class ReportsComponent implements OnInit {

  constructor(private vc: VacancyService, private router: Router) { }

  ngOnInit() {

  }



}
