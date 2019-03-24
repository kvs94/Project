import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplatesComponent } from './pages/templates/templates.component';
import { TemplateDetailComponent } from './pages/template-detail/template-detail.component';
var routes = [
    { path: '', component: TemplatesComponent },
    { path: ':id', component: TemplateDetailComponent }
];
var TemplateRoutingModule = /** @class */ (function () {
    function TemplateRoutingModule() {
    }
    TemplateRoutingModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [RouterModule.forChild((routes))],
            exports: [RouterModule]
        })
    ], TemplateRoutingModule);
    return TemplateRoutingModule;
}());
export { TemplateRoutingModule };
//# sourceMappingURL=template-routing.module.js.map