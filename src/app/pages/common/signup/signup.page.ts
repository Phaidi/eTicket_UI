/* eslint-disable new-parens */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class SignupPage implements OnInit {

  regForm: User = new User;
  errors: any[];

  constructor( private router: Router) { }

  ngOnInit() {
  }
}
