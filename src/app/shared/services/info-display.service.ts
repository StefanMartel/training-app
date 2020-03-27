import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { typeOfMessageToDisplay } from '../models/enums/message-to-display.model';

@Injectable({
    providedIn: 'root',
})
export class InfoDisplayService {

    constructor(
        private snackBar: MatSnackBar
    ) {}

    displaySnackBarMessage(message: string, typeOfMessage: typeOfMessageToDisplay = typeOfMessageToDisplay.info ) {
        this.snackBar.open(message, '', {
            duration: 2000,
            panelClass: [typeOfMessage, 'bold'],
          });
    }

}
