/* eslint-disable new-parens */
import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {

  ticForm: Ticket = new Ticket;

  constructor() { }

  ngOnInit() {
  }

}
