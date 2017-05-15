import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { GlobalService } from '../../../global.service';
import { AuthenticationService } from '../services/authentication.service';
// import { UserService } from '../../../operational/register/user/services/user.service';
// import { PermissionService } from '../../permission/services/permission.service';
import { Authentication } from '../models/authentication.model';
// import { User} from '../../../operational/register/user/models/user.model';
// import { UserSession } from '../models/user-session.model';
// import { SideBarObj } from '../../../md-layout/sidebar/models/sideBarObj.model';
// import { AuthenticationLevelTypeModel } from '../models/authenticationLevelType.model';
// import { Access } from '../../permission/models/access.model';

@Component({
  selector: 'authentication-component',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthenticationService]
})
export class AuthenticationComponent implements OnInit {
  constructor(
    private gs: GlobalService,
    private router: Router,
    private loginService: AuthenticationService,
    private fb: FormBuilder
    // private userService:UserService,
    // private permissionService:PermissionService
  ) { }

  private objAuthentication: Authentication = new Authentication({});

  // private userSession: UserSession = new UserSession({});
  private loginForm: FormGroup;
  private invalidLogin: boolean = false;



  ngOnInit() {
    if (!this.gs.getAuthenticated()) {
      this.generateSession();
    }
    this.buildForm();
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


  generateSession() {
    // this.objAuthentication = new Authentication({});
    // this.loginService.generateSession().subscribe(
    //   data => {
    //
    //   },
    //   err => {
    //     // this.gs.openAlert("Aviso!", "Ocorreu um erro ao iniciar sessão!");
    //   }
    // );
  }


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
this.gs.setUserSession('asjdhfkjsahdfo8478rwu489r');
    this.gs.setAuthenticated(true);
    this.invalidLogin = false;
    this.router.navigate(['']);

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

  getSessionUser() {
    // var filter = new User({});
    // filter.ID = this.userSession.UserID;
    // this.userService.getUser(filter).subscribe(
    //     data=>{
    //         if (data.length > 0) {
    //             this.userSession.SessionUser = data[0];
    //
    //             this.getAccessList();
    //         }else{
    //             this.clearFields();
    //             this.gs.openAlert("Aviso!", "Erro ao gerar dados de sessão!");
    //         }
    //     },
    //     err=>{
    //         this.clearFields();
    //         this.gs.openAlert("Aviso!", "Erro ao gerar dados de sessão!");
    //     }
    // );
  }

  getAccessList() {
    // this.permissionService.getAccessByUser(this.gs.getUserSession(), undefined).subscribe(
    //     data => {
    //         this.gs.setAccessList(data);
    //         this.gs.setAuthenticated(true);
    //         this.router.navigate(['']);
    //     },
    //     err => {
    //         this.gs.openAlert("Aviso!", "Ocorreu um erro ao gerar Menu!");
    //     }
    // );
  }

}
