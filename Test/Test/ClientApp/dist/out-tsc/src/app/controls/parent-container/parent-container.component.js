import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ContainerDirective } from 'src/app/assets/container.directive';
var ParentContainerComponent = /** @class */ (function () {
    function ParentContainerComponent(_componentFactoryResolver, _dataService) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._dataService = _dataService;
        this.parent = 0;
        this.controls = [
            { id: 1, type: "container", value: "Container 1", parent: 0, children: [2, 3], dependencies: [2, 3] },
            { id: 2, type: "checkbox", value: true, parent: 0, children: [], dependencies: [1, 2, 3] },
            { id: 3, type: "textBox", value: "Text for text box", parent: 0, children: [], dependencies: [1, 2] },
            { id: 4, type: "container", value: "Container 2", parent: 1, children: [5, 6], dependencies: [5, 6] },
            { id: 5, type: "dateTime", value: "12/12/12", parent: 1, children: [], dependencies: [4, 6] },
            { id: 6, type: "comboBox", value: "TestSelectedItem", parent: 4, children: [], dependencies: [4, 5] }
        ];
        this.componentRefs = [];
    }
    ParentContainerComponent.prototype.ngOnInit = function () {
        //this._dataService.getControls().subscribe((data: any)  => this.controls = data);
        //console.log(this.controls);
        this.viewControls();
    };
    ParentContainerComponent.prototype.viewControls = function () {
        var _this = this;
        this.controls.forEach(function (control) {
            if (control.parent === _this.parent) {
                var type = _this.typeSelector.getControlType(control.type);
                var componentFactory = _this._componentFactoryResolver.resolveComponentFactory(type);
                var viewContainerRef = _this.appContainer.viewContainerRef.createComponent(componentFactory);
                _this.componentRefs.push(viewContainerRef);
            }
        });
    };
    ParentContainerComponent.prototype.viewChildren = function () {
    };
    tslib_1.__decorate([
        ViewChild(ContainerDirective),
        tslib_1.__metadata("design:type", ContainerDirective)
    ], ParentContainerComponent.prototype, "appContainer", void 0);
    ParentContainerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-parent-container',
            templateUrl: './parent-container.component.html',
            styleUrls: ['./parent-container.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ComponentFactoryResolver,
            DataService])
    ], ParentContainerComponent);
    return ParentContainerComponent;
}());
export { ParentContainerComponent };
//# sourceMappingURL=parent-container.component.js.map