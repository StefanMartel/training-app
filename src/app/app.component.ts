import { AddTrainingAction, GetTrainingListAction } from './core/store/training-list/training-list.action';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Store } from '@ngrx/store';
import { TrainingListMock } from './core/mocks/training-list.mocks';
import { AddUserAction } from './core/store/user/user.action';
import { UserMock } from './core/mocks/user.mocks';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private store: Store<any>
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.store.dispatch(new AddUserAction(UserMock));
      this.store.dispatch(new GetTrainingListAction(UserMock.login));
      this.splashScreen.hide();
    });
  }
}
