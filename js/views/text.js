var TextView = PopupView.extend({
	events: {
		"click #createtext": "createText"
	},
	createText: function(){
		var mytext = $('#mytext').val();
		var color = $('#color').val();
		window.text = new fabric.Text( mytext , { 
		  fontFamily: 'Delicious_500', 
		  left: 100, 
		  top: 100 ,
		  fontSize: 40,
		  fill:  color
		});
	    window.canvas.add(window.text);
	    window.canvas.renderAll();
	    this.close();
	}
});