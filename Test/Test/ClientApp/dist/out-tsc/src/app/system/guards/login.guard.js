import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthDialog } from '../components/auth-dialog/auth-dialog.component';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ErrorHandlerService } from '../services/error-handler.service';
var LoginGuard = /** @class */ (function () {
    function LoginGuard(dialog, _router, http, _errorHandler) {
        this.dialog = dialog;
        this._router = _router;
        this.http = http;
        this._errorHandler = _errorHandler;
        this.logonName = '';
        this.password = '';
    }
    LoginGuard.prototype.canActivate = function (route, state) {
        var helper = new JwtHelperService();
        var token = localStorage.getItem("Authentication");
        if (token && !helper.isTokenExpired(token)) {
            return true;
        }
        else {
            this.logedIn = false;
            this.url = state.url;
            this.openDialog();
            return this.logedIn;
        }
    };
    LoginGuard.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AuthDialog, {
            width: '300px',
            data: { logonName: this.logonName, password: this.password }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.logonName = result.logonName;
            _this.password = result.password;
            _this.checkIfLoggedIn();
            _this.logonName = "";
            _this.password = "";
        });
    };
    LoginGuard.prototype.checkIfLoggedIn = function () {
        if (this.logonName && this.password) {
            var credentials = JSON.stringify({ logonName: this.logonName, password: this.password });
            this.login(credentials);
        }
    };
    LoginGuard.prototype.login = function (credentials) {
        var _this = this;
        this.http.post("/api/auth/login", credentials, {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }).subscribe(function (response) {
            var token = response.token;
            localStorage.setItem("Authentication", token);
            _this.logedIn = true;
            _this._router.navigate([_this.url]);
        }, function (err) {
            _this._errorHandler.openSnackBar(err.status, err.message);
        });
    };
    LoginGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialog,
            Router,
            HttpClient,
            ErrorHandlerService])
    ], LoginGuard);
    return LoginGuard;
}());
export { LoginGuard };
//# sourceMappingURL=login.guard.js.map