import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

import { EntryViewModel } from '../models/entryViewModel';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['../vacancy.css']
})

export class NewEntryComponent implements OnInit {

  constructor(private fb: FormBuilder, private vc: VacancyService, private router: Router) { }
  private viewModel: EntryViewModel;
  private newEntryForm: FormGroup;

  ngOnInit() {
    this.viewModel = new EntryViewModel({});
    this.buildForm();
  }

  buildForm() {
    this.newEntryForm = this.fb.group({
      'placa': [this.viewModel.Placa, Validators.required],
      'veiculo': [this.viewModel.Veiculo, Validators.required],
      'cor': [this.viewModel.Cor, Validators.required],
      'vaga': [this.viewModel.Vaga, Validators.required]
    });
  }

  save() {
    this.vc.saveNewEntry(this.viewModel).subscribe(
      data => {
        this.router.navigate(['/dashboard'])
      },
      err => {

      });
  }

}
