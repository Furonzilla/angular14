import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/shared/user.model';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css'],
})
export class User2Component implements OnInit {
  users = new Array();

  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  zipCode = new FormControl('');
  city = new FormControl('');

  constructor() {}

  newUser() {
    this.users.push(
      new User(
        this.username,
        this.email,
        this.password,
        this.street,
        this.zipCode,
        this.city
      )
    );
  }

  ngOnInit(): void {}
}
