var CircleView = PopupView.extend({
	events: {
		"click #createcircle": "createCircle"
	},
	createCircle: function(){
		var color = $("#color").val();
		var circle = new fabric.Circle({
	        left:   180,
	        top:    30,
	        radius: 90,
	        fill:   color
	    });
		circle.hasRotatingPoint = true;
	    window.canvas.add(circle);
	    window.canvas.renderAll();
	    this.close();
	}
});