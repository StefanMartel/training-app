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
        MatInputModule
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
        MatInputModule
    ]
})
export class SharedModule {
    constructor(private translate: TranslateService) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('fr');

        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
    }
}
