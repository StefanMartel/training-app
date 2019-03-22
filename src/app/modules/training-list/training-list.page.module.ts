import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { TrainingListPage } from './pages/training-list/training-list.page';
import { TrainingListItemComponent } from './components/training-list-item/training-list-item.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: TrainingListPage
      }
    ])
  ],
  declarations: [TrainingListPage, TrainingListItemComponent]
})

export class TrainingListPageModule { }
