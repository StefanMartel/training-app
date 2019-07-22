import { Component } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { TrainingModel } from 'src/app/core/models/training.model';
import { TrainingService } from 'src/app/core/services/training-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmActionComponent } from 'src/app/shared/components/confirm-action/confirm-action.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-training-list',
  templateUrl: 'training-list.page.html',
  styleUrls: ['training-list.page.scss'],
})
export class TrainingListPage {

  trainingList$: Observable<TrainingModel[]>;
  deleteConfirm$ = new Subject();

  newTrainingCreating = false;
  
  newTrainingValue: string;

  constructor(
    private trainingService: TrainingService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private translate: TranslateService
  ) {
    this.trainingList$ = this.trainingService.getTrainingList();
  }

  openAddTraining() {
    this.newTrainingCreating = true;
  }

  closeAddTraining(){
    this.newTrainingCreating = false;
  }

  addTraining() {
    if (this.newTrainingValue != '') {
      this.trainingService.addTraining(this.newTrainingValue);
      this.clearNewValue();
      this.closeAddTraining();
    }
  }

  clearNewValue(){
    this.newTrainingValue='';
  }

  deleteTraining(trainingId: number){
    this.deleteConfirm$.next(false);
    this.openDialog();    
    this.deleteConfirm$.subscribe(
      data => {
        if(data){
          this.trainingService.deleteTraining(trainingId);
        }
      }
    )    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmActionComponent, {
      width: '250px',
      data: {title: '', text: this.translate.instant('CONFIRM.DELETE_TRAINING') }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteConfirm$.next(true);
      }
    });
  }

}
