/* eslint-disable new-parens */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logForm: User = new User;
  errors = [];

  constructor(private router: Router,
              public loadingController: LoadingController,
              private authService: AuthService) { }

  ngOnInit() {
    this.login();
  }

  login() {
    this.authService.login().subscribe(data => {
      console.log(data);
      this.logForm = data;
    });
  }

}
