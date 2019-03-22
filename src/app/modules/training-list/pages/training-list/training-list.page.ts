import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { TrainingModel } from 'src/app/core/models/training.model';
import { AddTrainingAction } from 'src/app/core/store/training-list/training-list.action';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-training-list',
  templateUrl: 'training-list.page.html',
  styleUrls: ['training-list.page.scss'],
})
export class TrainingListPage implements OnInit {

  trainingList: Array<TrainingModel>;
  newTrainingCreationning = false;
  newTrainingForm: FormGroup;

  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.store.select('training').subscribe(data => {
      this.trainingList = data;
    });
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
    this.newTrainingCreationning = true;
  }

  addTraining() {
    if (this.newTrainingForm.valid) {
      this.store.dispatch(new AddTrainingAction({
        id: 4,
        title: this.newTrainingForm.controls['titleControl'].value,
        creationDate: new Date()
      }));
      this.newTrainingForm.reset();
      this.newTrainingCreationning = false;
    }
  }
}