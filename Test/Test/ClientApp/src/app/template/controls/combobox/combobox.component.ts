import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { BaseControl } from '../../common/base-control';
import { DataService } from '../../services/data.service';
import { ValueChanges } from '../../common/value-changes';
import { MatSelect } from '@angular/material';
import { ErrorHandlerService } from 'src/app/system/services/error-handler.service';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboboxComponent extends BaseControl implements OnInit, OnDestroy {
	@ViewChild('select') select: MatSelect;
	id: number;
	value: string;
	name: string;
	subscription: Subscription;
	dependencies: number[] = [];

    constructor(private _dataService: DataService, private _errorHandler: ErrorHandlerService) {
		super();
	}	

    ngOnInit() {
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
		let valueChanges: ValueChanges = {id: this.id, value: this.select.value, dependencies: this.dependencies};
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
