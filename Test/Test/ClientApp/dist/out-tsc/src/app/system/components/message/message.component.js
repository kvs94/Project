import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
var MessageComponent = /** @class */ (function () {
    function MessageComponent(data) {
        this.data = data;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent = tslib_1.__decorate([
        Component({
            selector: 'app-message',
            templateUrl: './message.component.html',
            styleUrls: ['./message.component.scss']
        }),
        tslib_1.__param(0, Inject(MAT_SNACK_BAR_DATA)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], MessageComponent);
    return MessageComponent;
}());
export { MessageComponent };
//# sourceMappingURL=message.component.js.map