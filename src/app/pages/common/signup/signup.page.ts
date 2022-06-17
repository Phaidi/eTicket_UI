/* eslint-disable new-parens */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class SignupPage implements OnInit {

  regForm: User = new User;
  errors: any[];

  msg: any;

  constructor( private router: Router,
     private authService: AuthService) { }

  ngOnInit() {
    this.regForm = new User;
  }

  signUp(){
    this.authService.signUp(this.regForm).subscribe({
      next: data => {
        console.log('Sign in data: ', data);
        this.errors = [];

        this.router.navigate(['/login'], {
          queryParams: { message: 'You have registered successfully' }

        });

      }, error: err => {
        this.errors[0] = err.message;
      }
    });
  }

}
