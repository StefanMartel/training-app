import { Component, OnInit, Input } from '@angular/core';

import { TrainingModel } from 'src/app/core/models/training.model';

@Component({
  selector: 'app-training-list-item',
  templateUrl: './training-list-item.component.html',
  styleUrls: ['./training-list-item.component.scss']
})
export class TrainingListItemComponent implements OnInit {

  @Input() training: TrainingModel;

  constructor() { }

  ngOnInit() {
  }

}
