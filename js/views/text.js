var TextView = PopupView.extend({
	events: {
		"click #createtext": "createText"
	},
	createText: function(){
		var mytext = $('#mytext').val();
		var font = $('#myfont').val();
		var color = $('#color').val();
		window.text = new fabric.Text( mytext , { 
		  fontFamily: font, 
		  left: 100, 
		  top: 100 ,
		  fontSize: 40,
		  fill:  color
		});
		text.hasRotatingPoint = true;
	    window.canvas.add(window.text);
	    window.canvas.renderAll();
	    window.canvas.setActiveObject(window.text);
	    this.close();
	}
});