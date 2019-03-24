import { Component, ViewChild } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { BaseControl } from '../../common/base-control';
import { DataService } from '../../services/data.service';
import { ValueChanges } from '../../common/value-changes';
import { MatTextareaAutosize } from '@angular/material';
import { ErrorHandlerService } from 'src/app/system/services/error-handler.service';

@Component({
  selector: 'app-text-box',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent extends BaseControl{
  @ViewChild('textarea') textarea: MatTextareaAutosize;
  name: string;
  value: any;
  id: number;
  subscription: Subscription;
  dependencies: number[] = [];
  private timer;

  observable: Subject<ValueChanges> = new Subject<ValueChanges>();

  constructor(private _dataService: DataService, private _errorHandler: ErrorHandlerService) {
	  super();
  }	

  ngOnInit() {
    this.getDependencies(this.id);
    this.observable
    .pipe(debounceTime(1000))
    .subscribe(o => this.mediator.notify(o))
  }

  getDependencies(id: number) {
		this.subscription = this._dataService.getDependencies(id).subscribe((d) => {
			this.dependencies = d;
		}, err => {		
			this._errorHandler.openErrorMsg(err.status, err.message);
		});
  }
  
  sendMessage() {
    this.observable.next({id: this.id, value: this.value, dependencies: this.dependencies});
	/*clearTimeout(this.timer);
	let valueChanges: ValueChanges = {id: this.id, value: this.value, dependencies: this.dependencies};
	this.timer = setTimeout(()=> {
		this.mediator.notify(valueChanges);	
	}, 1000);	*/
  }

  getMessage(valueChanges: ValueChanges) {
	  console.log(`I control with id ${this.id} get message, that control with id ${valueChanges.id} changed value to ${valueChanges.value}`);
  }

  ngOnDestroy() {
	  this.subscription.unsubscribe();
	  this.subscription = null;
  }
}
