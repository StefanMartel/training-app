import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { ConfirmActionComponent } from './components/confirm-action/confirm-action.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        HttpClientModule,
        TranslateModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatListModule,
        MatIconModule,
        MatRippleModule,
        MatInputModule,
        MatDialogModule,
        MatSnackBarModule,
        MatButtonModule,
        AgmCoreModule.forRoot(
          {apiKey: 'AIzaSyANKiSPp_Iyp-UFFsQxtKeV3D3BjT2vnC0'}
        )
    ],
    exports: [
        CommonModule,
        IonicModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        MatListModule,
        MatIconModule,
        MatRippleModule,
        MatInputModule,
        MatDialogModule,
        MatSnackBarModule,
        MatButtonModule,
        AgmCoreModule
    ],
    declarations: [ConfirmActionComponent],
    entryComponents: [ConfirmActionComponent]
})

export class SharedModule {
    constructor(private translate: TranslateService) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('fr');
        console.log('SHARED MODULE LOADED');

        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
    }
}
