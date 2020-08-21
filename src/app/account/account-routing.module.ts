import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  	{
  		path: 'auth',
  		loadChildren: './auth/auth.module#AuthModule'
  	},
];

@NgModule({
  	imports: [ RouterModule.forChild(routes) ],
  	exports: [ RouterModule ]
})
export class AccountRoutingModule { }