import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { BaseControl } from '../../common/base-control';
import { DataService } from '../../services/data.service';
import { MatSelect } from '@angular/material';
import { ErrorHandlerService } from 'src/app/system/services/error-handler.service';
var ComboboxComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ComboboxComponent, _super);
    function ComboboxComponent(_dataService, _errorHandler) {
        var _this = _super.call(this) || this;
        _this._dataService = _dataService;
        _this._errorHandler = _errorHandler;
        _this.dependencies = [];
        return _this;
    }
    ComboboxComponent.prototype.ngOnInit = function () {
        this.getDependencies(this.id);
    };
    ComboboxComponent.prototype.getDependencies = function (id) {
        var _this = this;
        this.subscription = this._dataService.getDependencies(id).subscribe(function (d) {
            _this.dependencies = d;
        }, function (err) {
            _this._errorHandler.openSnackBar(err.status, err.message);
        });
    };
    ComboboxComponent.prototype.sendMessage = function () {
        var valueChanges = { id: this.id, value: this.select.value, dependencies: this.dependencies };
        this.mediator.notify(valueChanges);
    };
    ComboboxComponent.prototype.getMessage = function (valueChanges) {
        console.log("I control with id " + this.id + " get message, that control with id " + valueChanges.id + " changed value to " + valueChanges.value);
    };
    ComboboxComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.subscription = null;
    };
    tslib_1.__decorate([
        ViewChild('select'),
        tslib_1.__metadata("design:type", MatSelect)
    ], ComboboxComponent.prototype, "select", void 0);
    ComboboxComponent = tslib_1.__decorate([
        Component({
            selector: 'app-combobox',
            templateUrl: './combobox.component.html',
            styleUrls: ['./combobox.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, ErrorHandlerService])
    ], ComboboxComponent);
    return ComboboxComponent;
}(BaseControl));
export { ComboboxComponent };
//# sourceMappingURL=combobox.component.js.map