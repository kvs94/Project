import { Component, OnInit, OnDestroy, ViewChild, Input, ComponentRef } from '@angular/core';
import { ContainerDirective } from '../../directives/container.directive';
import { BaseControl } from '../../common/base-control';
import { Control } from '../../models/control';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ControlsMediatorService } from '../../services/controls-mediator.service';
import { ControlsCreatorService } from '../../services/controls-creator.service';
import { ErrorHandlerService } from 'src/app/system/services/error-handler.service';

@Component({
  selector: 'app-parent-container',
  templateUrl: './parent-container.component.html',
  styleUrls: ['./parent-container.component.scss']
})
export class ParentContainerComponent implements OnInit, OnDestroy {
	@ViewChild(ContainerDirective) appContainer: ContainerDirective;
	@Input() templateId: number;
	controlsRefs: ComponentRef<any>[] = [];
	control: BaseControl = new Control();
	childControls: BaseControl[] = [];
	subscriptions: Subscription[] = [];
	childNodesCreaeted: boolean = false;
		
	constructor(private _dataService: DataService,
		private _controlsMediator: ControlsMediatorService, 
	    private _controlsCreatorService: ControlsCreatorService,
		private _errorHandler: ErrorHandlerService) { }
    
	ngOnInit() {
	 	this.getControlData(); 
	}

	getControlData() {
		let subscription = this._dataService.getTemplateData(this.templateId).subscribe(control => {
			this.control = control;		
			this.createChildNodes();				
		}, err => {		
			this._errorHandler.openErrorMsg(err.status, err.message);
		});		
		this.subscriptions.push(subscription);
	}

	createChildNodes() {	
        if (!!this.control.children && this.control.children.length > 0){
			this.control.children.forEach(c => {		
				this._controlsCreatorService.createControl(this.appContainer, c, this._controlsMediator);
			});
		}	
	}
	
	ngOnDestroy() {
		this._controlsMediator.removeControls();
		this.subscriptions.forEach(subscription => {
			subscription.unsubscribe();
			subscription = null;
		});
	}
}
