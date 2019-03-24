import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Template } from '../models/template';
import { BaseControl } from '../common/base-control';


@Injectable({
  providedIn: 'root'
})
export class DataService {	
	private urlControls = "/api/controls";
	private urlTemplates = "/api/templates";  
  
	private _token;
	get token() {
	  this._token = localStorage.getItem("Authentication");
	   return this._token;
	}
	private headers = {
	  headers: new HttpHeaders({
		"Authorization": "Bearer " + this.token,
		"Content-Type": "application/json"
	  })
	};
  
	constructor(private http: HttpClient) { }
  
	getControl(id: number): Observable<BaseControl> {
	  return this.http.get<BaseControl>(`${this.urlControls}/${id}`, this.headers);
	}
  
	getChildren(id: number): Observable<BaseControl[]> {
	  return this.http.get<BaseControl[]>(`${this.urlControls}/${id}/child-controls`, this.headers);
	}
  
	getTemplates(): Observable<Template[]> {
	  return this.http.get<Template[]>(this.urlTemplates, this.headers);
	}
  
	getDependencies(id: number) {
	  return this.http.get<number[]>(`${this.urlControls}/${id}/dependencies`, this.headers);
	}
  
	getTemplateData(id: number): Observable<BaseControl> {
	  return this.http.get<BaseControl>(`${this.urlTemplates}/${id}`, this.headers);
	} 
}
