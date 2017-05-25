import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

import { ReportViewModel } from '../models/reportViewModel';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-occurrence',
  templateUrl: './occurrence.component.html',
  styleUrls: ['../vacancy.css']
})
export class OccurrenceComponent implements OnInit {

  constructor(private fb: FormBuilder, private vc: VacancyService, private router: Router) { }
  private viewModel: ReportViewModel;
  private newEntryForm: FormGroup;

  ngOnInit() {
    this.viewModel = new ReportViewModel({});
    this.buildForm();
  }

  buildForm() {
    this.newEntryForm = this.fb.group({
      'placa': [this.viewModel.Placa, Validators.required],
      'veiculo': [this.viewModel.Veiculo, Validators.required],
      'descricao': [this.viewModel.Descricao, Validators.required],
    });
  }

  save() {
    this.vc.saveNewReport(this.viewModel).subscribe(
      data => {
        this.router.navigate(['/dashboard'])
      },
      err => {

      });
  }

}
