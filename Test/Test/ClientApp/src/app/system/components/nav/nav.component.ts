import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
	constructor(private _router: Router) { }
	ngOnInit() { }  

	logOut() {
		localStorage.removeItem("Authentication");
		this._router.navigate(["/home"]);
	}

}
