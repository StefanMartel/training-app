<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';

import { TrainingModel } from 'src/app/core/models/training.model';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 494e973b906bb03821575ac5d5c34be6fc1fc7c0

@Component({
  selector: 'app-training-list-item',
  templateUrl: './training-list-item.component.html',
  styleUrls: ['./training-list-item.component.scss']
})
export class TrainingListItemComponent implements OnInit {

<<<<<<< HEAD
  @Input() training: TrainingModel;

=======
>>>>>>> 494e973b906bb03821575ac5d5c34be6fc1fc7c0
  constructor() { }

  ngOnInit() {
  }

}
