import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { BaseControl } from '../../common/base-control';
import { ContainerDirective } from '../../derectives/container.directive';
var ContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ContainerComponent, _super);
    function ContainerComponent() {
        return _super.call(this) || this;
    }
    ContainerComponent.prototype.getMessage = function (valueChanges) {
        console.log("I control with id " + this.id + " get message, that control with id " + valueChanges.id + " changed value to " + valueChanges.value);
    };
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
        tslib_1.__metadata("design:paramtypes", [])
    ], ContainerComponent);
    return ContainerComponent;
}(BaseControl));
export { ContainerComponent };
//# sourceMappingURL=container.component.js.map