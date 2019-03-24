import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesComponent } from './pages/templates/templates.component';
import { TemplateDetailComponent } from './pages/template-detail/template-detail.component';

const routes: Routes = [
	{path: '', component: TemplatesComponent},
	{path: ':id', component: TemplateDetailComponent}
];

@NgModule({	
  declarations: [],
  imports: [RouterModule.forChild((routes))],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
