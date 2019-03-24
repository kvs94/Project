import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MessageComponent } from '../components/message/message.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  durationInSeconds = 5;
  constructor(private snackBar: MatSnackBar) { }

  openErrorMsg(status: string, message: string) {
    this.snackBar.openFromComponent(MessageComponent, {
	  duration: this.durationInSeconds * 1000,
	  data: {status: status, message: message}
    });
  }
}
