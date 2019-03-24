import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
var TemplatesComponent = /** @class */ (function () {
    function TemplatesComponent(_dataService, _router) {
        this._dataService = _dataService;
        this._router = _router;
        this.templates = [];
    }
    TemplatesComponent.prototype.ngOnInit = function () {
        this.getTemplates();
    };
    TemplatesComponent.prototype.getTemplates = function () {
        var _this = this;
        this._dataService.getTemplates().subscribe(function (templates) {
            _this.templates = templates;
        });
    };
    TemplatesComponent.prototype.goToDetail = function (id) {
        this._router.navigate([this._router.url.toString(), id]);
    };
    TemplatesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-templates',
            templateUrl: './templates.component.html',
            styleUrls: ['./templates.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router])
    ], TemplatesComponent);
    return TemplatesComponent;
}());
export { TemplatesComponent };
//# sourceMappingURL=templates.component.js.map