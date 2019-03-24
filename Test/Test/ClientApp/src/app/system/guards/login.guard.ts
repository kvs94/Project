import { Injectable } from '@angular/core';
import { CanActivate, Router, Route, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthDialog } from '../components/auth-dialog/auth-dialog.component';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ErrorHandlerService } from '../services/error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
	error: any;
	logonName: string = '';
	password: string = '';
	logedIn: boolean;
	private url: string;

	constructor(public dialog: MatDialog,
		private _router: Router, 
		private http: HttpClient,
		private _errorHandler: ErrorHandlerService) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {				
		const helper = new JwtHelperService();
		let token = localStorage.getItem("Authentication");
		if (token && ! helper.isTokenExpired(token)){
			return true;
		} else {
			this.logedIn = false;
			this.url = state.url;			
			this.openDialog();	
			return this.logedIn;
		}		
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(AuthDialog, {
			width: '300px',
			data: {logonName: this.logonName, password: this.password}
		});

		dialogRef.afterClosed().subscribe((result) => {
			this.logonName = result.logonName;
			this.password = result.password;	
			this.checkIfLoggedIn();
			this.logonName = "";
			this.password = "";
		});
	}

	private checkIfLoggedIn() {		
		if (this.logonName && this.password) {
			let credentials = JSON.stringify({logonName: this.logonName, password: this.password});
			this.login(credentials);
		}
	}

	login(credentials: string) {
		this.http.post("/api/auth/login", credentials, {
			headers: new HttpHeaders({
				"Content-Type": "application/json"
			})
		}).subscribe(response => {
			let token = (<any>response).token;
			localStorage.setItem("Authentication", token);
			this.logedIn = true;			
			this._router.navigate([this.url]);
		}, err => {		
			this._errorHandler.openErrorMsg(err.status, err.message);
		});
	}
}
