import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'training', pathMatch: 'full' },
  { path: 'training', loadChildren: './modules/training-list/training-list.page.module#TrainingListPageModule' },
  { path: 'map', loadChildren: './modules/map/map.page.module#MapPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
