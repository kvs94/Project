import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../models/user';

@Component({
	selector: 'auth-dialog',
	templateUrl: './auth-dialog.component.html',
	styleUrls: ['./auth-dialog.component.scss']
  })
  
export class AuthDialog {
	hide = true;
	constructor(
	  public dialogRef: MatDialogRef<AuthDialog>,
	  @Inject(MAT_DIALOG_DATA) public user: User) {}
}