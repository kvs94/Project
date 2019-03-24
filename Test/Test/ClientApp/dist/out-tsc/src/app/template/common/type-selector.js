import { ControlType } from './control-type';
import { ContainerComponent } from '../controls/container/container.component';
import { CheckboxComponent } from '../controls/checkbox/checkbox.component';
import { ComboboxComponent } from '../controls/combobox/combobox.component';
import { TextboxComponent } from '../controls/textbox/textbox.component';
var TypeSelector = /** @class */ (function () {
    function TypeSelector() {
    }
    TypeSelector.prototype.getControlType = function (type) {
        var controlType;
        switch (type) {
            case ControlType.container:
                controlType = ContainerComponent;
                break;
            case ControlType.textBox:
                controlType = TextboxComponent;
                break;
            case ControlType.checkbox:
                controlType = CheckboxComponent;
                break;
            case ControlType.comboBox:
                controlType = ComboboxComponent;
                break;
        }
        return controlType;
    };
    return TypeSelector;
}());
export { TypeSelector };
//# sourceMappingURL=type-selector.js.map