import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BaseControl } from '../../common/base-control';
import { DataService } from '../../services/data.service';
import { ValueChanges } from '../../common/value-changes';
import { MatCheckbox } from '@angular/material';
import { ErrorHandlerService } from 'src/app/system/services/error-handler.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends BaseControl implements OnInit, OnDestroy {
	@ViewChild('checkbox') checkbox: MatCheckbox;
	id: number;
	name: string;
	private _value: boolean ;
	set value(value: string) {
		if (value === 'true') {
			this._value = true;
		} else {
			this._value = false;
		}
	}		
	get value(): string {
		return this._value ? 'true' : 'false';
	}
	subscription: Subscription;
	dependencies: number[] = [];

    constructor(private _dataService: DataService, private _errorHandler: ErrorHandlerService) {
		super();
	}	

    ngOnInit() {	
		this.checkbox.checked = this._value;
		this.getDependencies(this.id);
	}

	getDependencies(id: number){
		this.subscription = this._dataService.getDependencies(id).subscribe((d) => {
			this.dependencies = d;
		}, err => {		
			this._errorHandler.openErrorMsg(err.status, err.message);
		});
	}
	
	sendMessage() {
		this._value = this.checkbox.checked;
		let valueChanges: ValueChanges = {id: this.id, value: this.value, dependencies: this.dependencies};
		this.mediator.notify(valueChanges);	
	}

	getMessage(valueChanges: ValueChanges) {
		console.log(`I control with id ${this.id} get message, that control with id ${valueChanges.id} changed value to ${valueChanges.value}`);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
		this.subscription = null;
	}
}
