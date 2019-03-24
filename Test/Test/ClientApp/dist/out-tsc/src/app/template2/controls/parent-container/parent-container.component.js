import * as tslib_1 from "tslib";
import { Component, ViewChild, Input } from '@angular/core';
import { ContainerDirective } from '../../derectives/container.directive';
import { DataService } from '../../services/data.service';
import { ControlsMediatorService } from '../../services/controls-mediator.service';
import { ErrorHandlerService } from 'src/app/system/services/error-handler.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource, MatTree } from '@angular/material';
import { NodeControl } from '../../models/node-control';
import { ControlsCreatorService } from '../../services/controls-creator.service';
var ParentContainerComponent = /** @class */ (function () {
    function ParentContainerComponent(_dataService, _controlsMediator, _errorHandler, _controlsCreatorService) {
        this._dataService = _dataService;
        this._controlsMediator = _controlsMediator;
        this._errorHandler = _errorHandler;
        this._controlsCreatorService = _controlsCreatorService;
        this.subscriptions = [];
        this.nodeData = new NodeControl();
        this.treeControl = new NestedTreeControl(function (node) { return node.children; });
        this.dataSource = new MatTreeNestedDataSource();
        this.hasChild = function (_, node) { return !!node.children && node.children.length > 0; };
    }
    ParentContainerComponent.prototype.ngOnInit = function () {
        this.getControlData();
        this.getChildControls(this.templateId);
    };
    ParentContainerComponent.prototype.transform = function (elem1) {
        var elem2 = {};
        elem2.id = elem1.id;
        elem2.name = elem1.name;
        elem2.type = elem1.type;
        elem2.value = elem1.value;
        return elem2;
    };
    ParentContainerComponent.prototype.getControlData = function () {
        var _this = this;
        var subscription = this._dataService.getControl(this.templateId).subscribe(function (control) {
            _this.nodeData = _this.transform(control);
        }, function (err) {
            _this._errorHandler.openSnackBar(err.status, err.message);
        });
        this.subscriptions.push(subscription);
    };
    ParentContainerComponent.prototype.getChildControls = function (controlId) {
        var _this = this;
        var subscription = this._dataService.getChildren(controlId).subscribe(function (children) {
            _this.nodeData.children = [];
            children.forEach(function (c) { return _this.nodeData.children.push(_this.transform(c)); });
            console.log(_this.nodeData);
            _this.dataSource.data = [_this.nodeData];
            //this.createChildControls(containerDirective);				
        }, function (err) {
            _this._errorHandler.openSnackBar(err.status, err.message);
        });
        this.subscriptions.push(subscription);
    };
    ParentContainerComponent.prototype.create = function () {
        var _this = this;
        debugger;
        this.nodeData.children.forEach(function (c) {
            debugger;
            _this._controlsCreatorService.createControl(_this.appContainer.viewContainerRef, c);
        });
    };
    // createChildControls(containerDirective: ContainerDirective) {
    // 	debugger;
    // 	this.childControls.forEach((control:BaseControl) => {
    // 		let type = this._typeService.getControlType(control.type);
    // 		let componentFactory = this._componentFactoryResolver.resolveComponentFactory<any>(type);
    // 		let componentRef = containerDirective.viewContainerRef.createComponent(componentFactory);
    // 		(<BaseControl>componentRef.instance).id = control.id ;
    // 		(<BaseControl>componentRef.instance).value = control.value;
    // 		(<BaseControl>componentRef.instance).name = control.name;			
    // 		(<BaseControl>componentRef.instance).setMediator(this._controlsMediator);			  
    // 		this._controlsMediator.addControl(<any>componentRef.instance);
    // 		// recursive creation of child components
    // 		if (type === ContainerComponent) {				
    // 			this.getChildControls(control.id, (<any>componentRef.instance).appContainer);
    // 		}		
    // 	});
    // }
    ParentContainerComponent.prototype.ngOnDestroy = function () {
        this._controlsMediator.removeControls();
        this.subscriptions.forEach(function (subscription) {
            subscription.unsubscribe();
            subscription = null;
        });
    };
    tslib_1.__decorate([
        ViewChild(ContainerDirective),
        tslib_1.__metadata("design:type", ContainerDirective)
    ], ParentContainerComponent.prototype, "appContainer", void 0);
    tslib_1.__decorate([
        ViewChild('matTree'),
        tslib_1.__metadata("design:type", MatTree)
    ], ParentContainerComponent.prototype, "matTree", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], ParentContainerComponent.prototype, "templateId", void 0);
    ParentContainerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-parent-container',
            templateUrl: './parent-container.component.html',
            styleUrls: ['./parent-container.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService,
            ControlsMediatorService,
            ErrorHandlerService,
            ControlsCreatorService])
    ], ParentContainerComponent);
    return ParentContainerComponent;
}());
export { ParentContainerComponent };
//# sourceMappingURL=parent-container.component.js.map