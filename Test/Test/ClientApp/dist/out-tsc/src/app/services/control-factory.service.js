import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ControlType } from '../assets/control-type';
import { Container } from '../models/container';
import { ComboBox } from '../models/combo-box';
import { TextBox } from '../models/text-box';
import { CheckBox } from '../models/check-box';
var ControlFactoryService = /** @class */ (function () {
    function ControlFactoryService() {
    }
    ControlFactoryService.prototype.create = function (controlType) {
        var control;
        switch (controlType) {
            case ControlType.container:
                control = new Container();
                break;
            case ControlType.checkbox:
                control = new CheckBox();
                break;
            case ControlType.comboBox:
                control = new ComboBox();
                break;
            case ControlType.textBox:
                control = new TextBox();
                break;
        }
        return control;
    };
    ControlFactoryService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], ControlFactoryService);
    return ControlFactoryService;
}());
export { ControlFactoryService };
//# sourceMappingURL=control-factory.service.js.map