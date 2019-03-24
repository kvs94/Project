var BaseNodeControl = /** @class */ (function () {
    function BaseNodeControl(mediator) {
        if (mediator === void 0) { mediator = null; }
        this.mediator = mediator;
    }
    BaseNodeControl.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    BaseNodeControl.prototype.getMessage = function (valueChanges) {
        console.log("" + valueChanges.id);
    };
    return BaseNodeControl;
}());
export { BaseNodeControl };
// const TREE_DATA: Node[] = [
// 	{
// 	  id: 1,
// 	  name: 'Fruit',
// 	  children: [
// 		{name: 'Apple'},
// 		{name: 'Banana'},
// 		{name: 'Fruit loops'},
// 	  ]
// 	}, {
// 	  name: 'Vegetables',
// 	  children: [
// 		{
// 		  name: 'Green',
// 		  children: [
// 			{name: 'Broccoli'},
// 			{name: 'Brussel sprouts'},
// 		  ]
// 		}, {
// 		  name: 'Orange',
// 		  children: [
// 			{name: 'Pumpkins'},
// 			{name: 'Carrots'},
// 		  ]
// 		},
// 	  ]
// 	},
// ];
//# sourceMappingURL=base-node-control.js.map