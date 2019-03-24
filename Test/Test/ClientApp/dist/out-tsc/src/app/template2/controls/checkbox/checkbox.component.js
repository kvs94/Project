import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatCheckbox } from '@angular/material';
import { ErrorHandlerService } from 'src/app/system/services/error-handler.service';
import { BaseNodeControl } from '../../common/base-node-control';
var CheckboxComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CheckboxComponent, _super);
    function CheckboxComponent(_dataService, _errorHandler) {
        var _this = _super.call(this) || this;
        _this._dataService = _dataService;
        _this._errorHandler = _errorHandler;
        _this.dependencies = [];
        return _this;
    }
    Object.defineProperty(CheckboxComponent.prototype, "value", {
        get: function () {
            return this._value ? 'true' : 'false';
        },
        set: function (value) {
            if (value === 'true') {
                this._value = true;
            }
            else {
                this._value = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.ngOnInit = function () {
        this.checkbox.checked = this._value;
        //this.getDependencies(this.id);
    };
    CheckboxComponent.prototype.getDependencies = function (id) {
        var _this = this;
        this.subscription = this._dataService.getDependencies(id).subscribe(function (d) {
            _this.dependencies = d;
        }, function (err) {
            _this._errorHandler.openSnackBar(err.status, err.message);
        });
    };
    CheckboxComponent.prototype.sendMessage = function () {
        this._value = this.checkbox.checked;
        var valueChanges = { id: this.id, value: this.value, dependencies: this.dependencies };
        this.mediator.notify(valueChanges);
    };
    CheckboxComponent.prototype.getMessage = function (valueChanges) {
        console.log("I control with id " + this.id + " get message, that control with id " + valueChanges.id + " changed value to " + valueChanges.value);
    };
    CheckboxComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.subscription = null;
    };
    tslib_1.__decorate([
        ViewChild('checkbox'),
        tslib_1.__metadata("design:type", MatCheckbox)
    ], CheckboxComponent.prototype, "checkbox", void 0);
    CheckboxComponent = tslib_1.__decorate([
        Component({
            selector: 'app-checkbox',
            templateUrl: './checkbox.component.html',
            styleUrls: ['./checkbox.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, ErrorHandlerService])
    ], CheckboxComponent);
    return CheckboxComponent;
}(BaseNodeControl));
export { CheckboxComponent };
//# sourceMappingURL=checkbox.component.js.map