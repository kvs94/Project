import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var AuthComponent = /** @class */ (function () {
    function AuthComponent(dialog) {
        this.dialog = dialog;
    }
    AuthComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AuthDialog, {
            width: '300px',
            data: { logonName: this.logonName, password: this.password }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.logonName = result.logonName;
            _this.password = result.password;
        });
    };
    AuthComponent = tslib_1.__decorate([
        Component({
            selector: 'app-auth',
            templateUrl: 'auth.component.html',
            styleUrls: ['auth.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialog])
    ], AuthComponent);
    return AuthComponent;
}());
export { AuthComponent };
var AuthDialog = /** @class */ (function () {
    function AuthDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AuthDialog = tslib_1.__decorate([
        Component({
            selector: 'auth-dialog',
            templateUrl: 'auth-dialog.html',
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object])
    ], AuthDialog);
    return AuthDialog;
}());
export { AuthDialog };
//# sourceMappingURL=auth.component.js.map