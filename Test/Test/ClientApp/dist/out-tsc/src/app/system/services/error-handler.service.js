import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MessageComponent } from '../components/message/message.component';
var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService(snackBar) {
        this.snackBar = snackBar;
        this.durationInSeconds = 5;
    }
    ErrorHandlerService.prototype.openSnackBar = function (status, message) {
        this.snackBar.openFromComponent(MessageComponent, {
            duration: this.durationInSeconds * 1000,
            data: { status: status, message: message }
        });
    };
    ErrorHandlerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [MatSnackBar])
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());
export { ErrorHandlerService };
//# sourceMappingURL=error-handler.service.js.map