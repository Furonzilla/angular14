import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/shared/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  username = new FormControl('test username');
  email = new FormControl('test email');
  password = new FormControl('test password');
  street = new FormControl('test street');
  zipCode = new FormControl('test zip code');
  city = new FormControl('test city');
  user: User = new User(
    this.username,
    this.email,
    this.password,
    this.street,
    this.zipCode,
    this.city
  );

  isSubmitted: boolean = false;

  turnToSubmitted() {
    this.isSubmitted = true;
  }
  constructor() {}

  ngOnInit(): void {}
}
