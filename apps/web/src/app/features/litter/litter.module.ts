import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LitterRoutingModule } from './litter-routing.module';
import { LitterListComponent } from './components/litter-list/litter-list.component';
import { LitterFormComponent } from './components/litter-form/litter-form.component';

@NgModule({
  declarations: [
    LitterListComponent,
    LitterFormComponent,
  ],
  imports: [
    CommonModule,
    LitterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LitterModule { }