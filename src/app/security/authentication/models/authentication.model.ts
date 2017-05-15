export class Authentication {
  UserName: string;
  Password: string;

  constructor(a: any) {
    this.UserName = a.UserName;
    this.Password = a.Password;
  }
}
