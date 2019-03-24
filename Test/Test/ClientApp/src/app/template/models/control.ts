import { BaseControl } from '../common/base-control';

export class Control extends BaseControl{
	id: number;	
	name: string;
	type: number;
	value: any;
	parent: number;
}
