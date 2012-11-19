// TODO rename DocView to NewView
var DocView = PopupView.extend({
	events: {
		"click #createcanvas": "createCanvas"
	},
	createCanvas: function(){
		var color = $('#color').val();
		// create the fabric canvas
		window.canvas = new fabric.Canvas('c', {
			backgroundColor: color
		});	
		window.canvas.renderAll();
	    this.close();
	}
});