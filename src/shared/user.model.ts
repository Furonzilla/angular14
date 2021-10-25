import { FormControl } from "@angular/forms";

export class User {
  username: FormControl;
  email: FormControl;
  password: FormControl;
  street: FormControl;
  zipCode: FormControl;
  city: FormControl;

  constructor(
    toto: FormControl,
    email: FormControl,
    password: FormControl,
    street: FormControl,
    zipCode: FormControl,
    city: FormControl
  ) {
    this.username = toto;
    this.email = email;
    this.password = password;
    this.street = street;
    this.zipCode = zipCode;
    this.city = city;
  }
}
