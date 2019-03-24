import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControlsMediatorService } from '../../services/controls-mediator.service';
var TemplateDetailComponent = /** @class */ (function () {
    function TemplateDetailComponent(_router, _controlsMediator) {
        this._router = _router;
        this._controlsMediator = _controlsMediator;
    }
    TemplateDetailComponent.prototype.ngOnInit = function () {
        this.templateId = this._router.snapshot.params['id'];
    };
    TemplateDetailComponent.prototype.getList = function () {
        this._controlsMediator.getControlsInfo();
    };
    TemplateDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-template-detail',
            templateUrl: './template-detail.component.html',
            styleUrls: ['./template-detail.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, ControlsMediatorService])
    ], TemplateDetailComponent);
    return TemplateDetailComponent;
}());
export { TemplateDetailComponent };
//# sourceMappingURL=template-detail.component.js.map