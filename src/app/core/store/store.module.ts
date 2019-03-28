import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingListModule } from './training-list/training-list.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TrainingListModule,
    UserModule
  ]
})
export class StoreModule { }
