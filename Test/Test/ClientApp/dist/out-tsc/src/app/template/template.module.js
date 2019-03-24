import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './controls/container/container.component';
import { TextboxComponent } from './controls/textbox/textbox.component';
import { ParentContainerComponent } from './controls/parent-container/parent-container.component';
import { CheckboxComponent } from './controls/checkbox/checkbox.component';
import { ComboboxComponent } from './controls/combobox/combobox.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { TemplateDetailComponent } from './pages/template-detail/template-detail.component';
import { ContainerDirective } from './derectives/container.directive';
import { TemplateRoutingModule } from './template-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DataService } from './services/data.service';
import { ControlsMediatorService } from './services/controls-mediator.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { TypeService } from './services/type.service';
var TemplateModule = /** @class */ (function () {
    function TemplateModule() {
    }
    TemplateModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                ContainerComponent,
                CheckboxComponent,
                TextboxComponent,
                ComboboxComponent,
                ParentContainerComponent,
                ContainerDirective,
                TemplatesComponent,
                TemplateDetailComponent
            ],
            entryComponents: [
                CheckboxComponent,
                TextboxComponent,
                ComboboxComponent,
                ContainerComponent,
                ParentContainerComponent
            ],
            imports: [
                CommonModule,
                TemplateRoutingModule,
                FormsModule,
                HttpClientModule,
                AngularFontAwesomeModule,
                MatToolbarModule,
                MatButtonModule,
                MatCardModule,
                MatCheckboxModule,
                MatInputModule,
                MatSelectModule,
                MatExpansionModule
            ],
            providers: [DataService, ControlsMediatorService, TypeService]
        })
    ], TemplateModule);
    return TemplateModule;
}());
export default TemplateModule;
//# sourceMappingURL=template.module.js.map