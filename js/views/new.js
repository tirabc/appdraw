// TODO rename DocView to NewView
var DocView = PopupView.extend({
	events: {
		"click #createcanvas": "createCanvas"
	},
	createCanvas: function(){
		if(window.canvas != null && window.canvas != undefined){
			window.canvas.clear();
		}
		var color = $('#color').val();
		window.canvas_title = $('#title').val();
		// create the fabric canvas
		window.canvas = new fabric.Canvas('c', {
			backgroundColor: color
		});	
		window.canvas.renderAll();
	    this.close();
	}
});