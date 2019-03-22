import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> 494e973b906bb03821575ac5d5c34be6fc1fc7c0
import { IonicModule } from '@ionic/angular';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        HttpClientModule,
        TranslateModule,
        CommonModule,
<<<<<<< HEAD
        FormsModule,
        ReactiveFormsModule
=======
        FormsModule
>>>>>>> 494e973b906bb03821575ac5d5c34be6fc1fc7c0
    ],
    exports: [
        CommonModule,
        IonicModule,
<<<<<<< HEAD
        TranslateModule,
        FormsModule,
        ReactiveFormsModule
=======
        TranslateModule
>>>>>>> 494e973b906bb03821575ac5d5c34be6fc1fc7c0
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
