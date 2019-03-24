import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControlsMediatorService } from '../../services/controls-mediator.service';

@Component({
  selector: 'app-template-detail',
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.scss']
})
export class TemplateDetailComponent implements OnInit {
  templateId: number;
  constructor(private _router: ActivatedRoute, private _controlsMediator: ControlsMediatorService) { }

  ngOnInit() {
	  this.templateId = this._router.snapshot.params['id'];
  }

  getList() {
	this._controlsMediator.getControlsInfo();
  }

}
