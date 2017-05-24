import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

import { EntryViewModel } from '../models/entryViewModel';
import { ExitViewModel } from '../models/exitViewModel';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-close-stay',
  templateUrl: './close-stay.component.html',
  styleUrls: ['../vacancy.css']
})
export class CloseStayComponent implements OnInit {

  constructor(private fb: FormBuilder, private vc: VacancyService, private router: Router) { }
  private filter: EntryViewModel;
  private closeForm: FormGroup;
  private exitView: ExitViewModel = new ExitViewModel({});
  private paymentType: number;

  ngOnInit() {
    this.filter = new EntryViewModel({});
    this.buildForm();
  }

  buildForm() {
    this.closeForm = this.fb.group({
      'placa': [this.filter.Placa, Validators.required]
    });
  }

  findPlaca() {
    this.vc.searchStay(this.filter.Placa).subscribe(
      data => {
        this.exitView = new ExitViewModel(data);
      },
      err => {

      });
  }

  selectPayment(type: number) {
    this.paymentType = type;
  }
}
