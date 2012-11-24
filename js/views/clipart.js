var ClipartView = PopupView.extend({
	events: {
		"click .image": "selectClipart",
		"click #createclipart": "createClipart",
		"change #own_img": "selectMyOwnImage",
		"click #add_own_images": "addOwnImages"
	},
	selectClipart: function(e){
		$('.image').parent().removeClass('img_item_selected');
		$('.image').parent().addClass('img_item');
		$(e.currentTarget).parent().removeClass('img_item');
		$(e.currentTarget).parent().addClass('img_item_selected');
		fabric.Image.fromURL($(e.target).attr('data-url'), function(img) {
	        var oImg = img.set({ left: 100, top: 100,}).scale(1); 
			oImg.hasRotatingPoint = true;
	        window.img = oImg;
	    });
	},
	addOwnImages: function(){
		_.each(window.images,function(item){
			fabric.Image.fromURL(item.data, function(img) {
		        var oImg = img.set({ left: 100, top: 100,}).scale(1); 
				oImg.hasRotatingPoint = true;
				window.canvas.add(oImg);
				window.canvas.renderAll();
		    });
		});
		this.close();
	},
	selectMyOwnImage: function(e){
		var files = e.target.files;
		window.images = [];
		// Loop through the FileList and render image files as thumbnails.
	    for (var i = 0, f; f = files[i]; i++) {
	
	      // Only process image files.
	      if (!f.type.match('image.*')) {
	        continue;
	      }
	
	      var reader = new FileReader();
	
	      // Closure to capture the file information.
	      reader.onload = (function(theFile) {
	        return function(e) {
	          // Render thumbnail.
	          var span = document.createElement('span');
	          window.images.push({data:e.target.result,name:theFile.name});
	          span.innerHTML = ['<img class="thumb" src="', e.target.result,
	                            '" title="', escape(theFile.name), '"/>'].join('');
	          document.getElementById('list').insertBefore(span, null);
	        };
	      })(f);
	
	      // Read in the image file as a data URL.
	      reader.readAsDataURL(f);
	    }
	},
	createClipart: function(){
		window.canvas.add(window.img);
		window.canvas.renderAll();
		this.close();
	}
});