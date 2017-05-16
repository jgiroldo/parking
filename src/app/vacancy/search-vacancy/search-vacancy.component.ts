import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { GlobalService } from '../../global.service';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'search-vacancy',
  templateUrl: './search-vacancy.component.html',
  styleUrls: ['./search-vacancy.component.css'],
  providers: [VacancyService]
})
export class SearchVacancyComponent implements OnInit {
  constructor(
    private gs: GlobalService,
    private router: Router,
    private vacancyService: VacancyService,
    private fb: FormBuilder
    // private userService:UserService,
    // private permissionService:PermissionService
  ) { }

  private objAuthentication: any = new Object({});

  // private userSession: UserSession = new UserSession({});
  private loginForm: FormGroup;
  private invalidLogin: boolean = false;



  ngOnInit() {
    // if (!this.gs.getAuthenticated()) {
    //   this.generateSession();
    // }
    // this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      'username': [this.objAuthentication.UserName, Validators.required],
      'password': [this.objAuthentication.Password, Validators.required]
    });

    this.loginForm.valueChanges
      .subscribe(() => {
        data => this.onValueChanged(data);
      });

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'username': '',
    'password': '',

  };

  validationMessages = {
    'username': {
      'required': 'Campo obrigatório.',
    },
    'password': {
      'required': 'Campo obrigatório.',
    }
  };


  getGrt() {
    let hour = new Date().getHours();
    if (hour < 12)
      return "Bom Dia";
    else if (hour >= 12 && hour < 18)
      return "Boa Tarde";
    else if (hour >= 18)
      return "Boa Noite";
  }


  clearFields() {
    this.objAuthentication.Password = "";
    this.objAuthentication.UserName = "";
    document.getElementById("username").focus();
  }

  submit() {
    // this.loginService.login(this.objAuthentication).subscribe(
    //   data => {
    //     if (!data.Error) {
    //       debugger;
    //       if (data.Messages[0].Details) {
    //         let generatedToken = data.Messages[0].Details
    //         // this.userSession.SessionID = generatedToken;
    //         // this.gs.setUserSession(this.userSession);
    //         this.gs.setAuthenticated(true);
    //         this.invalidLogin = false;
    //         this.router.navigate(['']);
    //       } else {
    //         // this.gs.openAlert("Aviso!", "Login ou senha inválido!",null, 5000);
    //         this.objAuthentication.Password = "";
    //         document.getElementById("password").focus();
    //       }
    //     } else {
    //       this.objAuthentication.Password = undefined;
    //       document.getElementById("password").focus();
    //       this.invalidLogin = true;
    //     }
    //   },
    //   err => {
    //     this.objAuthentication.Password = undefined;
    //     document.getElementById("password").focus();
    //     this.invalidLogin = true;
    //     // this.gs.openAlert("Aviso!", " "+ errorLocation +" inválido! ", null, 5000 );
    //   }
    // );
  }


}
