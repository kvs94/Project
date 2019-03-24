import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.urlControls = "/api/controls";
        this.urlTemplates = "/api/templates";
    }
    DataService.prototype.getControl = function (id) {
        return this.http.get(this.urlControls + "/" + id);
    };
    DataService.prototype.getChildren = function (id) {
        return this.http.get(this.urlControls + "/" + id + "/child-controls");
    };
    DataService.prototype.getTemplate = function (id) {
        return this.http.get(this.urlTemplates + "/" + id);
    };
    DataService.prototype.getTemplates = function () {
        return this.http.get(this.urlTemplates);
    };
    DataService.prototype.getDependencies = function (id) {
        return this.http.get(this.urlControls + "/" + id + "/dependencies");
    };
    DataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map