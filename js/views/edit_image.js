var EditImageView = Backbone.View.extend({
	template: $("#tpl-popup").html(),
	events: {
		"click .close": "close"
	},
	initialize: function(image){
		_.bindAll(this,'render');
		$(this.el).html('');
		this.tool = window.Tool;
		window.pic_editor = new fabric.Canvas('e', {
			backgroundColor: "#FFFFFF"
		});
		/*fabric.Image.fromURL(image.getSrc(), function(img) {
	        var oImg = img.set({ left: 0, top: 0,}).scale(1); 
			oImg.hasRotatingPoint = true;
			window.img = oImg;
	    });*/
	    window.pic_editor.add(image);
	    window.pic_editor.renderAll();
	},
	render: function(){
		var output = Mustache.to_html(this.template,this.tool.toJSON());
		this.$el.html(output);
		return this;
	},
	close: function(){
		this.$el.remove();
	},
	clip: function(){
		
		window.pic_editor.clipTo = function(ctx) {
  			ctx.arc(0, 0, 60, 0, Math.PI*2, true);
  		}
  
	},
	greyscale: function(){
		var f = fabric.Image.filters;
		var effect = new f.Grayscale();
		var obj = window.canvas.getActiveObject();
    	obj.filters['greyscale'] = effect;
    	obj.applyFilters(window.canvas);
    	window.canvas.renderAll();
  	}

		
});