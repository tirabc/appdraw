var ClipartView = PopupView.extend({
	events: {
		"click .image": "selectClipart",
		"click #createclipart": "createClipart"
	},
	selectClipart: function(e){
		fabric.Image.fromURL($(e.target).attr('data-url'), function(img) {
	        var oImg = img.set({ left: 100, top: 100,}).scale(1);
	        window.img = oImg;
	    });
	},
	createClipart: function(){
		window.canvas.add(window.img);
		window.canvas.renderAll();
		this.close();
	}
});