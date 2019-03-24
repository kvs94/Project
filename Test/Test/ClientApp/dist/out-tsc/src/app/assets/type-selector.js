import { ControlType } from './control-type';
import { ContainerComponent } from '../controls/container/container.component';
import { CheckboxComponent } from '../controls/checkbox/checkbox.component';
import { ComboBoxComponent } from '../controls/combo-box/combo-box.component';
import { TextBoxComponent } from '../controls/text-box/text-box.component';
var TypeSelector = /** @class */ (function () {
    function TypeSelector() {
    }
    TypeSelector.prototype.getControlType = function (type) {
        var controlType;
        switch (type) {
            case ControlType.container:
                controlType = ContainerComponent;
                break;
            case ControlType.checkbox:
                controlType = CheckboxComponent;
                break;
            case ControlType.comboBox:
                controlType = ComboBoxComponent;
                break;
            case ControlType.textBox:
                controlType = TextBoxComponent;
                break;
        }
        return controlType;
    };
    return TypeSelector;
}());
export { TypeSelector };
//# sourceMappingURL=type-selector.js.map