import { Component, ComponentFactoryResolver, ViewChild, Type, ComponentRef, OnDestroy } from '@angular/core';
import { BaseControl } from '../../common/base-control';
import { ContainerDirective } from '../../directives/container.directive';
import { ControlsMediatorService } from '../../services/controls-mediator.service';
import { ValueChanges } from '../../common/value-changes';

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
	children?: BaseControl[] = [];
	mediator: ControlsMediatorService;
	
	constructor() {
		super();
	}    
	
	getMessage(valueChanges: ValueChanges) {
		console.log(`I control with id ${this.id} get message, that control with id ${valueChanges.id} changed value to ${valueChanges.value}`);
	}	
}
