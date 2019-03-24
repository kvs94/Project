import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { BaseControl } from '../../common/base-control';
import { DataService } from '../../services/data.service';
import { MatTextareaAutosize } from '@angular/material';
import { ErrorHandlerService } from 'src/app/system/services/error-handler.service';
var TextboxComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TextboxComponent, _super);
    function TextboxComponent(_dataService, _errorHandler) {
        var _this = _super.call(this) || this;
        _this._dataService = _dataService;
        _this._errorHandler = _errorHandler;
        _this.dependencies = [];
        return _this;
    }
    TextboxComponent.prototype.ngOnInit = function () {
        this.getDependencies(this.id);
    };
    TextboxComponent.prototype.getDependencies = function (id) {
        var _this = this;
        this.subscription = this._dataService.getDependencies(id).subscribe(function (d) {
            _this.dependencies = d;
        }, function (err) {
            _this._errorHandler.openSnackBar(err.status, err.message);
        });
    };
    TextboxComponent.prototype.sendMessage = function () {
        var _this = this;
        clearTimeout(this.timer);
        var valueChanges = { id: this.id, value: this.value, dependencies: this.dependencies };
        this.timer = setTimeout(function () {
            _this.mediator.notify(valueChanges);
        }, 1000);
    };
    TextboxComponent.prototype.getMessage = function (valueChanges) {
        console.log("I control with id " + this.id + " get message, that control with id " + valueChanges.id + " changed value to " + valueChanges.value);
    };
    TextboxComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.subscription = null;
    };
    tslib_1.__decorate([
        ViewChild('textarea'),
        tslib_1.__metadata("design:type", MatTextareaAutosize)
    ], TextboxComponent.prototype, "textarea", void 0);
    TextboxComponent = tslib_1.__decorate([
        Component({
            selector: 'app-text-box',
            templateUrl: './textbox.component.html',
            styleUrls: ['./textbox.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, ErrorHandlerService])
    ], TextboxComponent);
    return TextboxComponent;
}(BaseControl));
export { TextboxComponent };
//# sourceMappingURL=textbox.component.js.map