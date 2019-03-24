import { Injectable, OnInit } from '@angular/core';
import { Mediator } from '../common/mediator';
import { ValueChanges } from '../common/value-changes';
import { BaseControl } from '../common/base-control';

@Injectable({
  providedIn: 'root'
})
export class ControlsMediatorService implements Mediator, OnInit {
	constructor(){}
	ngOnInit() {}
	private controlsList: any[] = [];

	addControl(control: any) {
		this.controlsList.push(control);
	}

	addControls(controlsList: any[]) {
		this.controlsList.push(...controlsList);	
	}

	removeControls() {
		this.controlsList = [];
	}

	notify(valueChanges: ValueChanges): void {	
		console.log(`Serivece get message from control with id ${valueChanges.id} and value ${valueChanges.value}`);
		this.controlsList.forEach((control) => {
			if ( !valueChanges.dependencies.includes(control.id) ) return;			
			<BaseControl>control.getMessage(valueChanges);		 
		}); 
	} 

	getControlsInfo() {
		let controls: string[] = [];		
		this.controlsList.forEach(control => controls.push(JSON.stringify({id: control.id, value: control.value})));
		console.log(`Loaded controls info: ${controls}`);
	}
}	
