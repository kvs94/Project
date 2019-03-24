import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Template } from '../../models/template';
import { ErrorHandlerService } from 'src/app/system/services/error-handler.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
  templates: Template[] = [];

  constructor(private _dataService: DataService, private _router: Router, private _errorHandler: ErrorHandlerService) { }

  ngOnInit() {
	  this.getTemplates();
  }

  getTemplates() {
	this._dataService.getTemplates().subscribe(templates  => {
		this.templates = templates;	
    }, (error) => {
		this._errorHandler.openErrorMsg(error.status, error.message);
	});
  }

  goToDetail(id: number){
	this._router.navigate([this._router.url.toString(), id]);
  }
}
