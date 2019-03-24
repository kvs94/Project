import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { TypeService } from './type.service';
import { BaseControl } from '../common/base-control';
import { ControlsMediatorService } from './controls-mediator.service';
import { ContainerComponent } from 'src/app/template2/controls/container/container.component';
import { ContainerDirective } from 'src/app/template2/directives/container.directive';

@Injectable({
  providedIn: 'root'
})
export class ControlsCreatorService {  
	
  constructor(private _typeService: TypeService, 
	private _componentFactoryResolver: ComponentFactoryResolver) { }

   createControl(appContainer: ContainerDirective, control: BaseControl, controlsMediator: ControlsMediatorService) {
	    let typeControl = this._typeService.getControlType(control.type);
		let componentFactory = this._componentFactoryResolver.resolveComponentFactory<any>(typeControl);
		let componentRef = appContainer.viewContainerRef.createComponent(componentFactory);		
		(<BaseControl>componentRef.instance).id = control.id ;
		(<BaseControl>componentRef.instance).value = control.value;
		(<BaseControl>componentRef.instance).name = control.name;			
		(<BaseControl>componentRef.instance).children = control.children;	
		(<BaseControl>componentRef.instance).setMediator(controlsMediator);			  
		controlsMediator.addControl(<any>componentRef.instance);	
		if (!!control.children && typeControl === ContainerComponent) {	
			control.children.forEach(c => {	
				this.createControl((<any>componentRef.instance).appContainer, c, controlsMediator);
			});				
		}
	}
}

