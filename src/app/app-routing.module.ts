import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import * as core from '@app/core';

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: "full" }
//	,{ path: 'db', component: core.DatabaseComponent }
//	,{ path: '**', component: core.HomeComponent }
	
];

@NgModule({
  declarations: [
//  	core.DatabaseComponent
  ],
  imports: [
  	CommonModule,
  	RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
