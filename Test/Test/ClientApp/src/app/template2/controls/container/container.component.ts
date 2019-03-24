import { Component,  ViewChild } from '@angular/core';
import { ContainerDirective } from '../../directives/container.directive';
import { ControlsMediatorService } from '../../services/controls-mediator.service';
import { ValueChanges } from '../../common/value-changes';
import { BaseControl } from '../../common/base-control';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent extends BaseControl {
	@ViewChild(ContainerDirective) appContainer: ContainerDirective;	
	id: number;
	name: string;
	value: any;
	type: number;
	children?: BaseControl[] = [];
	mediator: ControlsMediatorService;
	expanded: boolean = false;
	
	isExpanded() {
		this.expanded = !this.expanded;		
	}

	constructor() {
		super();
	}    
	
	getMessage(valueChanges: ValueChanges) {
		console.log(`I control with id ${this.id} get message, that control with id ${valueChanges.id} changed value to ${valueChanges.value}`);
	}	
}
