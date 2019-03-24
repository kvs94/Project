var BaseControl = /** @class */ (function () {
    function BaseControl(mediator) {
        if (mediator === void 0) { mediator = null; }
        this.mediator = mediator;
    }
    BaseControl.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    BaseControl.prototype.getMessage = function (valueChanges) {
        console.log("" + valueChanges.id);
    };
    return BaseControl;
}());
export { BaseControl };
//# sourceMappingURL=base-control.js.map