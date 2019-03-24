import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var NavComponent = /** @class */ (function () {
    function NavComponent(_router) {
        this._router = _router;
    }
    NavComponent.prototype.ngOnInit = function () { };
    NavComponent.prototype.logOut = function () {
        localStorage.removeItem("Authentication");
        this._router.navigate(["/home"]);
    };
    NavComponent = tslib_1.__decorate([
        Component({
            selector: 'app-nav',
            templateUrl: './nav.component.html',
            styleUrls: ['./nav.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], NavComponent);
    return NavComponent;
}());
export { NavComponent };
//# sourceMappingURL=nav.component.js.map