import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TrainingModel } from 'src/app/shared/models/training.model';

@Component({
  selector: 'app-training-list-item',
  templateUrl: './training-list-item.component.html',
  styleUrls: ['./training-list-item.component.scss']
})
export class TrainingListItemComponent implements OnInit {

  @Input() training: TrainingModel;

  @Output() deleteTrainingId = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteTraining(trainingId: number) {
    this.deleteTrainingId.emit(trainingId);
  }

}
