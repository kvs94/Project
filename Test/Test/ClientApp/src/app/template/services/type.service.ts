import { Injectable, Type } from '@angular/core';
import { ControlType } from '../common/control-type';
import { ContainerComponent } from '../controls/container/container.component';
import { TextboxComponent } from '../controls/textbox/textbox.component';
import { CheckboxComponent } from '../controls/checkbox/checkbox.component';
import { ComboboxComponent } from '../controls/combobox/combobox.component';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  constructor() { }

  getControlType(type: number): Type<any> {
	let controlType: Type<any>;	

	switch (type) {
	  case ControlType.container:
		controlType = ContainerComponent;
		break;
	  case ControlType.textBox:
		controlType =  TextboxComponent;
		break;
	  case ControlType.checkbox:
		controlType = CheckboxComponent;
		break;
	  case ControlType.comboBox:
		controlType = ComboboxComponent;
		break;
	}		  

	return controlType;
  }
}
