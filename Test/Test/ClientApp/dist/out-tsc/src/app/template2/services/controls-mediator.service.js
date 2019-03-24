import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var ControlsMediatorService = /** @class */ (function () {
    function ControlsMediatorService() {
        this.controlsList = [];
    }
    ControlsMediatorService.prototype.ngOnInit = function () { };
    ControlsMediatorService.prototype.addControl = function (control) {
        this.controlsList.push(control);
    };
    ControlsMediatorService.prototype.addControls = function (controlsList) {
        var _a;
        (_a = this.controlsList).push.apply(_a, controlsList);
    };
    ControlsMediatorService.prototype.removeControls = function () {
        this.controlsList = [];
    };
    ControlsMediatorService.prototype.notify = function (valueChanges) {
        console.log("Serivece get message from control with id " + valueChanges.id + " and value " + valueChanges.value);
        this.controlsList.forEach(function (control) {
            if (!valueChanges.dependencies.includes(control.id))
                return;
            control.getMessage(valueChanges);
        });
    };
    ControlsMediatorService.prototype.getControlsInfo = function () {
        var controls = [];
        this.controlsList.forEach(function (control) { return controls.push(JSON.stringify({ id: control.id, value: control.value })); });
        console.log("Loaded controls info: " + controls);
    };
    ControlsMediatorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ControlsMediatorService);
    return ControlsMediatorService;
}());
export { ControlsMediatorService };
//# sourceMappingURL=controls-mediator.service.js.map