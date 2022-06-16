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
    loadChildren: () => import('./pages/common/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/common/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/common/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'udash',
    loadChildren: () => import('./pages/client/udash/udash.module').then( m => m.UdashPageModule)
  },
  {
    path: 'uprofile',
    loadChildren: () => import('./pages/client/uprofile/uprofile.module').then( m => m.UprofilePageModule)
  },
  {
    path: 'uticket',
    loadChildren: () => import('./pages/client/uticket/uticket.module').then( m => m.UticketPageModule)
  },
  {
    path: 'uaccount',
    loadChildren: () => import('./pages/client/uaccount/uaccount.module').then( m => m.UaccountPageModule)
  },
  {
    path: 'ticket',
    loadChildren: () => import('./pages/client/ticket/ticket.module').then( m => m.TicketPageModule)
  },
  {
    path: 'tickets',
    loadChildren: () => import('./pages/client/tickets/tickets.module').then( m => m.TicketsPageModule)
  },  {
    path: 'routes',
    loadChildren: () => import('./pages/client/routes/routes.module').then( m => m.RoutesPageModule)
  },
  {
    path: 'balances',
    loadChildren: () => import('./pages/client/balances/balances.module').then( m => m.BalancesPageModule)
  },
  {
    path: 'adroutes',
    loadChildren: () => import('./pages/admin/adroutes/adroutes.module').then( m => m.AdroutesPageModule)
  },
  {
    path: 'addroute',
    loadChildren: () => import('./pages/admin/addroute/addroute.module').then( m => m.AddroutePageModule)
  },
  {
    path: 'adticket',
    loadChildren: () => import('./pages/admin/adticket/adticket.module').then( m => m.AdticketPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
