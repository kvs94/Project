import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './system/pages/home/home.component';
import { NotFoundComponent } from './system/pages/not-found/not-found.component';
import { LoginGuard } from './system/guards/login.guard';


const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},	
	{path: 'templates', loadChildren: "./template/template.module", canActivate:[LoginGuard]},
 	{path: 'templates2', loadChildren: "./template2/template.module", canActivate:[LoginGuard]},
	{path: '404', component: NotFoundComponent},
	{path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
