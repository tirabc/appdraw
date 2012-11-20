
var appdraw = {
	
	init : function(){
		
		// TODO bind the body drop event into the AppView
		$('body').bind('drop', function(e){
			e.preventDefault();
			e = e.originalEvent;
			var mouse = window.canvas.getPointer(e);
			var files = e.dataTransfer.files;
			for(i=0;i<files.length;i++){
				var file = files[i];
			    var reader = new FileReader();
			    reader.readAsDataURL(file);
		        reader.onloadend = function(e){
		            fabric.Image.fromURL(e.target.result, function(img) {
			        	var oImg = img.set({ left: mouse.x, top: mouse.y}).scale(1);
			        	window.canvas.add(oImg).renderAll();
			    	});
		        }
			}
		});
		
		// Instantiate the router
		var app_router = new AppRouter;
		
		// Start Backbone history a necessary step for bookmarkable URL's
		Backbone.history.start();

	}
	
}
