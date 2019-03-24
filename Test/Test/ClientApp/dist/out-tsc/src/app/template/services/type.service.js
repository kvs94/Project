import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ControlType } from '../common/control-type';
import { ContainerComponent } from '../controls/container/container.component';
import { TextboxComponent } from '../controls/textbox/textbox.component';
import { CheckboxComponent } from '../controls/checkbox/checkbox.component';
import { ComboboxComponent } from '../controls/combobox/combobox.component';
var TypeService = /** @class */ (function () {
    function TypeService() {
    }
    TypeService.prototype.getControlType = function (type) {
        var controlType;
        switch (type) {
            case ControlType.container:
                controlType = ContainerComponent;
                break;
            case ControlType.textBox:
                controlType = TextboxComponent;
                break;
            case ControlType.checkbox:
                controlType = CheckboxComponent;
                break;
            case ControlType.comboBox:
                controlType = ComboboxComponent;
                break;
        }
        return controlType;
    };
    TypeService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TypeService);
    return TypeService;
}());
export { TypeService };
//# sourceMappingURL=type.service.js.map