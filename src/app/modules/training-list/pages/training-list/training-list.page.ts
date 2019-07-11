import { Component, OnInit } from '@angular/core';

import { TrainingModel } from 'src/app/core/models/training.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TrainingService } from 'src/app/core/services/training-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-training-list',
  templateUrl: 'training-list.page.html',
  styleUrls: ['training-list.page.scss'],
})
export class TrainingListPage implements OnInit {

  trainingList$: Observable<TrainingModel[]>;

  newTrainingCreating = false;
  newTrainingForm: FormGroup;

  newTrainingValue: string;

  constructor(
    private formBuilder: FormBuilder,
    private trainingService: TrainingService
  ) {
    this.initForm();
      this.trainingList$ = this.trainingService.getTrainingList();
  }

  ngOnInit() {

  }

  /**
 * Initialise le formulaire
 */
  initForm() {
    this.newTrainingForm = this.formBuilder.group({
      titleControl: ['', Validators.required]
    });
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
    this.trainingService.deleteTraining(trainingId);
  }
}
