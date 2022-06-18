/* eslint-disable new-parens */
import { Component, OnInit } from '@angular/core';
import { Deposit } from 'src/app/models/deposit';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.page.html',
  styleUrls: ['./balances.page.scss'],
})
export class BalancesPage implements OnInit {

  voForm: Deposit = new Deposit;

  constructor() { }

  ngOnInit() {
  }

}
