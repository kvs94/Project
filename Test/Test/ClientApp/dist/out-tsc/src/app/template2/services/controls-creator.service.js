import * as tslib_1 from "tslib";
import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { TypeService } from './type.service';
import { ControlsMediatorService } from './controls-mediator.service';
var ControlsCreatorService = /** @class */ (function () {
    function ControlsCreatorService(_typeService, _controlsMediator, _componentFactoryResolver) {
        this._typeService = _typeService;
        this._controlsMediator = _controlsMediator;
        this._componentFactoryResolver = _componentFactoryResolver;
    }
    ControlsCreatorService.prototype.createControl = function (viewContainerRef, control) {
        var type = this._typeService.getControlType(control.type);
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(type);
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.id = control.id;
        componentRef.instance.value = control.value;
        componentRef.instance.name = control.name;
        componentRef.instance.setMediator(this._controlsMediator);
        this._controlsMediator.addControl(componentRef.instance);
    };
    ControlsCreatorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [TypeService,
            ControlsMediatorService,
            ComponentFactoryResolver])
    ], ControlsCreatorService);
    return ControlsCreatorService;
}());
export { ControlsCreatorService };
//# sourceMappingURL=controls-creator.service.js.map