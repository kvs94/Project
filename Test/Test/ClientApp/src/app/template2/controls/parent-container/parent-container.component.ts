import { Component, OnInit, ViewChild, Input, OnDestroy, AfterViewChecked } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { ContainerDirective } from '../../directives/container.directive';
import { DataService } from '../../services/data.service';
import { ControlsMediatorService } from '../../services/controls-mediator.service';
import { ErrorHandlerService } from 'src/app/system/services/error-handler.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource, MatTree} from '@angular/material';
import { NodeControl } from '../../models/node-control';
import { BaseControl } from '../../common/base-control';
import { ControlsCreatorService } from '../../services/controls-creator.service';

@Component({
  selector: 'app-parent-container',
  templateUrl: './parent-container.component.html',
  styleUrls: ['./parent-container.component.scss']
})
export class ParentContainerComponent implements OnInit, OnDestroy, AfterViewChecked {
	@ViewChild(ContainerDirective) appContainer: ContainerDirective;
	@ViewChild('matTree') matTree: MatTree<any>;
	@Input() templateId: number;
	subscription: Subscription;
    control: BaseControl = new NodeControl();
    childNodesCreaeted: boolean = false;

	treeControl = new NestedTreeControl<BaseControl>(node => this.control.children);
	dataSource = new MatTreeNestedDataSource<BaseControl>(); 
	 
	hasChild = (node: BaseControl) => !!node.children && node.children.length > 0;
	expanded: boolean = false;
	
	isExpanded() {
		this.expanded = !this.expanded;		
	}

	constructor(private _dataService: DataService,
		private _controlsMediator: ControlsMediatorService, 
		private _errorHandler: ErrorHandlerService,
		private _controlsCreatorService: ControlsCreatorService) { 	
	}
	
	ngOnInit() {	
		this.getControlData();
	}

	ngAfterViewChecked() {
		setTimeout(() => {
			if (!!this.appContainer && !this.childNodesCreaeted){
				this.createChildNodes();
				this.childNodesCreaeted = true;
			} 
	 	}, 1);
	}

	getControlData() {
	   	this.subscription = this._dataService.getTemplateData(this.templateId).subscribe(control => {		
			this.control = control;	
			this.dataSource.data = [this.control];					
		}, err => {		
			this._errorHandler.openErrorMsg(err.status, err.message);
		});			
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
		this.subscription.unsubscribe();
		this.subscription = null;
	}
}


