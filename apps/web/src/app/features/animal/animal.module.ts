import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalAddComponent } from './components/animal-add/animal-add.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { AnimalUpdateComponent } from './components/animal-update/animal-update.component';

@NgModule({
  declarations: [
    AnimalAddComponent,
    AnimalListComponent,
    AnimalUpdateComponent,
  ],
  imports: [
    CommonModule,
    AnimalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AnimalModule { }