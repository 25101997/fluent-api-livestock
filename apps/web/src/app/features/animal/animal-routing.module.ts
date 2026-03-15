import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';
import { AnimalAddComponent } from './components/animal-add/animal-add.component';
import { AnimalUpdateComponent } from './components/animal-update/animal-update.component';

const routes: Routes = [
  { path: 'list', component: AnimalListComponent },
  { path: 'form', component: AnimalFormComponent },
  { path: 'add', component: AnimalAddComponent },
  { path: 'add/:id', component: AnimalFormComponent },
  { path: 'update/:id', component: AnimalUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule {}
