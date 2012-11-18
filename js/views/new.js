// TODO rename DocView to NewView
var DocView = PopupView.extend({
	events: {
		"click #createcanvas": "createCanvas"
	},
	createCanvas: function(){
		
		// create the fabric canvas
		window.canvas = new fabric.Canvas('c', {
			backgroundColor: '#FFFFFF'
		});	
		window.canvas.renderAll();
	    this.close();
	}
});