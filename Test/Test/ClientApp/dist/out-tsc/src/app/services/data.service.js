import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.url = "/api/controls";
    }
    DataService.prototype.getControls = function () {
        return this.http.get(this.url);
    };
    DataService.prototype.createControl = function (control) {
        return this.http.post(this.url, control);
    };
    DataService.prototype.updateControl = function (control) {
        return this.http.put(this.url + '/' + control.id, control);
    };
    DataService.prototype.deleteControl = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    DataService.prototype.getChildren = function (id) {
        return this.http.get(this.url + '/children/' + id);
    };
    DataService.prototype.getDependencies = function (id) {
        return this.http.get(this.url + '/dependencies/' + id);
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