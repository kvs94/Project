import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver, ViewChild, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ContainerDirective } from 'src/app/assets/container.directive';
import { Control } from 'src/app/models/control';
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(_componentFactoryResolver, _dataService) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._dataService = _dataService;
        this.parent = 4;
        this.controls = [
            { id: 2, type: "checkbox", value: true, children: [], dependencies: [1, 2, 3] },
            { id: 3, type: "textBox", value: "Text for text box", children: [], dependencies: [1, 2] },
            { id: 5, type: "textBox", value: "12/12/12", parent: 4, children: [], dependencies: [4, 6] },
            { id: 6, type: "comboBox", value: "TestSelectedItem", parent: 4, children: [], dependencies: [4, 5] }
        ];
    }
    ContainerComponent.prototype.ngOnInit = function () {
        // this._dataService.getChildren(this.control.id).subscribe((data: Control[]) => {
        // 	this.children = data;
        // });
        this.viewControls();
    };
    ContainerComponent.prototype.viewControls = function () {
        var _this = this;
        //children 
        this.controls.forEach(function (control) {
            if (control.parent === _this.parent) {
                var type = _this.typeSelector.getControlType(control.type);
                var componentFactory = _this._componentFactoryResolver.resolveComponentFactory(type);
                var viewContainerRef = _this.appContainer.viewContainerRef.createComponent(componentFactory);
                //this.componentRefs.push(viewContainerRef);
            }
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Control)
    ], ContainerComponent.prototype, "control", void 0);
    tslib_1.__decorate([
        ViewChild(ContainerDirective),
        tslib_1.__metadata("design:type", ContainerDirective)
    ], ContainerComponent.prototype, "appContainer", void 0);
    ContainerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-container',
            templateUrl: './container.component.html',
            styleUrls: ['./container.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ComponentFactoryResolver,
            DataService])
    ], ContainerComponent);
    return ContainerComponent;
}());
export { ContainerComponent };
//# sourceMappingURL=container.component.js.map