import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { CheckBox } from 'src/app/models/check-box';
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
    }
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", CheckBox)
    ], CheckboxComponent.prototype, "checkBox", void 0);
    CheckboxComponent = tslib_1.__decorate([
        Component({
            selector: 'app-checkbox',
            templateUrl: './checkbox.component.html',
            styleUrls: ['./checkbox.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());
export { CheckboxComponent };
//# sourceMappingURL=checkbox.component.js.map