import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'udash',
    loadChildren: () => import('./pages/udash/udash.module').then( m => m.UdashPageModule)
  },
  {
    path: 'uprofile',
    loadChildren: () => import('./pages/uprofile/uprofile.module').then( m => m.UprofilePageModule)
  },
  {
    path: 'uticket',
    loadChildren: () => import('./pages/uticket/uticket.module').then( m => m.UticketPageModule)
  },
  {
    path: 'uaccount',
    loadChildren: () => import('./pages/uaccount/uaccount.module').then( m => m.UaccountPageModule)
  },  {
    path: 'ticket',
    loadChildren: () => import('./ticket/ticket.module').then( m => m.TicketPageModule)
  },
  {
    path: 'tickets',
    loadChildren: () => import('./tickets/tickets.module').then( m => m.TicketsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
