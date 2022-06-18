/* eslint-disable new-parens */
import { Component, OnInit } from '@angular/core';
import { Routes } from 'src/app/models/routes';

@Component({
  selector: 'app-addroute',
  templateUrl: './addroute.page.html',
  styleUrls: ['./addroute.page.scss'],
})
export class AddroutePage implements OnInit {

  roForm: Routes = new Routes;

  constructor() { }

  ngOnInit() {
  }

}
