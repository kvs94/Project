import { Directive, ViewContainerRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appContainer]'
})
export class ContainerDirective {
	constructor(public viewContainerRef: ViewContainerRef) { 
	}	
}
