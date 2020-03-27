import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { MapService } from 'src/app/shared/services/map.service';
import { MapPointModel } from 'src/app/shared/models/map-point.model';

@Component({
  selector: 'map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss'],
})
export class MapPage implements OnInit {

  title = 'My first AGM project';
  points: Array<MapPointModel> = [];

  constructor(
    private mapService: MapService
  ) {
  }

  ngOnInit() {
      this.getOwnPosition();
  }

  getOwnPosition() {
    this.mapService.getPosition().subscribe(
      (pos: Position) => {
          this.points = [];
          this.points.push({
            latitude:  pos.coords.latitude,
            longitude: pos.coords.longitude,
            text: 'Vous êtes ici'
          });
          for (let i = 0; i <= 10; i++) {
            this.points.push({
              latitude:  pos.coords.latitude + (i * 0.02),
              longitude: pos.coords.longitude + (i * 0.02),
              text: 'Vous êtes ici : ' + i
            });
          }
      });
  }

  mapClicked($event: MouseEvent) {
    this.points.push({
      latitude: $event.coords.lat,
      longitude: $event.coords.lng
    });
  }


}
