import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'livestock', pathMatch: 'full' },
  {
    path: 'livestock',
    loadChildren: () =>
      import('./features/livestock/livestock.module').then(m => m.LivestockModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

