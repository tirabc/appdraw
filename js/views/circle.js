var CircleView = PopupView.extend({
	events: {
		"click #createcircle": "createCircle"
	},
	createCircle: function(){
		var circle = new fabric.Circle({
	        left:   180,
	        top:    30,
	        radius: 90,
	        fill:   "#220099"
	    });
	    window.canvas.add(circle);
	    window.canvas.renderAll();
	    this.close();
	}
});