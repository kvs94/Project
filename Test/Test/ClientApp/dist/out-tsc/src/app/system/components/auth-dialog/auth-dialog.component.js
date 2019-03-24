import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var AuthDialog = /** @class */ (function () {
    function AuthDialog(dialogRef, user) {
        this.dialogRef = dialogRef;
        this.user = user;
        this.hide = true;
    }
    AuthDialog = tslib_1.__decorate([
        Component({
            selector: 'auth-dialog',
            templateUrl: './auth-dialog.component.html',
            styleUrls: ['./auth-dialog.component.scss']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object])
    ], AuthDialog);
    return AuthDialog;
}());
export { AuthDialog };
//# sourceMappingURL=auth-dialog.component.js.map