import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        HttpClientModule,
        TranslateModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        CommonModule,
        IonicModule,
        TranslateModule
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
