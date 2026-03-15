import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LitterListComponent } from './components/litter-list/litter-list.component';
import { LitterFormComponent } from './components/litter-form/litter-form.component';


const routes: Routes = [
  { path: 'list', component: LitterListComponent },
  { path: 'add', component: LitterFormComponent },
  { path: 'update/:id', component: LitterFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LitterRoutingModule {}