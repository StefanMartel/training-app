import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { TrainingListPage } from './pages/training-list/training-list.page';
import { TrainingListItemComponent } from './components/training-list-item/training-list-item.component';
import { TrainingService } from 'src/app/shared/services/training-list.service';
import { SharedModule } from 'src/app/shared/shared.module';

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
  declarations: [
    TrainingListPage,
    TrainingListItemComponent
  ],
  providers: [
    TrainingService
  ]
})

export class TrainingListPageModule { }
