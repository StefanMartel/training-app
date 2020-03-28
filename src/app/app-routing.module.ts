import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'training', pathMatch: 'full' },
  { path: 'training', loadChildren: () => import('./modules/training-list/training-list.page.module').then(m => m.TrainingListPageModule) },
  { path: 'map', loadChildren: () => import('./modules/map/map.page.module').then(m => m.MapPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
