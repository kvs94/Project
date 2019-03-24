import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver, ViewChild, Input } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { Control } from '../../models/control';
import { ContainerDirective } from '../../derectives/container.directive';
import { DataService } from '../../services/data.service';
import { ControlsMediatorService } from '../../services/controls-mediator.service';
import { TypeService } from '../../services/type.service';
import { ErrorHandlerService } from 'src/app/system/services/error-handler.service';
var ParentContainerComponent = /** @class */ (function () {
    function ParentContainerComponent(_componentFactoryResolver, _dataService, _controlsMediator, _typeService, _errorHandler) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._dataService = _dataService;
        this._controlsMediator = _controlsMediator;
        this._typeService = _typeService;
        this._errorHandler = _errorHandler;
        this.controlsRefs = [];
        this.control = new Control();
        this.childControls = [];
        this.subscriptions = [];
    }
    ParentContainerComponent.prototype.ngOnInit = function () {
        this.getControlData();
        this.getChildControls(this.templateId, this.appContainer);
    };
    ParentContainerComponent.prototype.getControlData = function () {
        var _this = this;
        var subscription = this._dataService.getControl(this.templateId).subscribe(function (control) {
            _this.control = control;
        }, function (err) {
            _this._errorHandler.openSnackBar(err.status, err.message);
        });
        this.subscriptions.push(subscription);
    };
    ParentContainerComponent.prototype.getChildControls = function (controlId, containerDirective) {
        var _this = this;
        var subscription = this._dataService.getChildren(controlId).subscribe(function (controls) {
            _this.childControls = controls;
            _this.createChildControls(containerDirective);
        }, function (err) {
            _this._errorHandler.openSnackBar(err.status, err.message);
        });
        this.subscriptions.push(subscription);
    };
    ParentContainerComponent.prototype.createChildControls = function (containerDirective) {
        var _this = this;
        this.childControls.forEach(function (control) {
            var type = _this._typeService.getControlType(control.type);
            var componentFactory = _this._componentFactoryResolver.resolveComponentFactory(type);
            var componentRef = containerDirective.viewContainerRef.createComponent(componentFactory);
            componentRef.instance.id = control.id;
            componentRef.instance.value = control.value;
            componentRef.instance.name = control.name;
            componentRef.instance.setMediator(_this._controlsMediator);
            _this._controlsMediator.addControl(componentRef.instance);
            // recursive creation of child components
            if (type === ContainerComponent) {
                componentRef.instance.mediator = _this._controlsMediator;
                _this.getChildControls(control.id, componentRef.instance.appContainer);
            }
        });
    };
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
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], ParentContainerComponent.prototype, "templateId", void 0);
    ParentContainerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-parent-container',
            templateUrl: './parent-container.component.html',
            styleUrls: ['./parent-container.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ComponentFactoryResolver,
            DataService,
            ControlsMediatorService,
            TypeService,
            ErrorHandlerService])
    ], ParentContainerComponent);
    return ParentContainerComponent;
}());
export { ParentContainerComponent };
//# sourceMappingURL=parent-container.component.js.map