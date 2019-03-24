import * as tslib_1 from "tslib";
import { Directive, ViewContainerRef } from '@angular/core';
var ContainerDirective = /** @class */ (function () {
    function ContainerDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ContainerDirective = tslib_1.__decorate([
        Directive({
            selector: '[appContainer]'
        }),
        tslib_1.__metadata("design:paramtypes", [ViewContainerRef])
    ], ContainerDirective);
    return ContainerDirective;
}());
export { ContainerDirective };
//# sourceMappingURL=container.directive.js.map