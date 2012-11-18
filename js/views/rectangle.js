var RectangleView = PopupView.extend({
	events: {
		"click #createrectangle": "createRectangle"
	},
	createRectangle: function(){
		var color = $('#color').val();
		var rectangle = new fabric.Rect({
	        width: 100,
			height: 100,
			top: 150,
			left: 150,
			fill: color
	    });
	    window.canvas.add(rectangle);
	    window.canvas.renderAll();
	    this.close();
	}
});