import { Mediator } from "./mediator";
import { ValueChanges } from './value-changes';

export abstract class BaseControl {
	id: number;
	name: string
	type: number;
	value: any;
	parent: number;
	dependencies: number[];
	children?: BaseControl[];

    protected mediator: Mediator;

    constructor(mediator: Mediator = null) {
        this.mediator = mediator;
	  }	
	
	setMediator(mediator:Mediator)
	{
		this.mediator = mediator;
	}

	getMessage(valueChanges: ValueChanges) {
		console.log(`${valueChanges.id}`);
	}
}
