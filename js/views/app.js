var AppView = Backbone.View.extend({
	main_view: "#main-view",
	template: $('#tpl-app').html(),
	events: {
		'click #new': 'newDoc',
		'click #preview': 'preview',
		'click #save': 'save',
		'click #print': 'print',
		'click #circle': 'circle',
		'click #rectangle': 'rectangle',
		'click #text': 'text',
		'click #clipart': 'clipart',
		'click #bringToFront': 'bringToFront',
		'click #sendToBack': 'sendToBack',
		'click #bringForward': 'bringForward',
		'click #sendBackwards': 'sendBackwards',
		'click #sendToTrash': 'sendToTrash',
		'dblclick canvas': 'editObject'
	},
	editObject:function(e){
		// get mouse position
		var mouse = window.canvas.getPointer(e);
		// get first object
		var object = window.canvas.getActiveObject();
		// get type of object
		var type = object.type;
		// route
		switch(type){
			case 'rect':
			break;
			case 'image':
				this.editImage(object);
			break;
			case 'text':
			break;
			case 'circle':
			break;
		}
	},
	editImage: function(img){
		console.log(img);
		window.Tool = new Config({
			title: "Edit Image",
			baseline: "Edit your image now",
			body: $('#tpl-tool-edit-image').html()
		});
		var popup = new EditImageView();
		var html = popup.render();
		$("#popup").html(html.el);
		$("#myModal").reveal();
	},
	sendToTrash: function(){
		var obj = window.canvas.getActiveObject();
		window.canvas.remove(obj);
	},
	bringToFront: function(){
		var obj = window.canvas.getActiveObject();
		window.canvas.bringToFront(obj);
	},
	sendToBack: function(){
		var obj = window.canvas.getActiveObject();
		window.canvas.sendToBack(obj);
	},
	bringForward: function(){
		var obj = window.canvas.getActiveObject();
		window.canvas.bringForward(obj);
	},
	sendBackwards: function(){
		var obj = window.canvas.getActiveObject();
		window.canvas.sendBackwards(obj);
	},
	newDoc: function(){
		window.Tool = new Config({
			title: "New Document",
			baseline: "Create now our new document",
			body: $('#tpl-tool-new').html()
		});
		var popup = new DocView();
		var html = popup.render();
		$("#popup").html(html.el);
		var page = this.render();
		$("#main-view").append(page.el);
		$('#colorpicker').farbtastic("#color");
		$("#myModal").reveal();
	},
	preview: function(){
		if(window.canvas == null || window.canvas == undefined)
			return;
			
		window.canvas.deactivateAll();
    	var img = window.canvas.toDataURL("png");
    	window.Tool = new Config({
			title: "Preview",
			baseline: "View your work",
			body: "<img src='"+img+"'/>"
		});
		var popup = new TextView();
		var html = popup.render();
		$("#popup").html(html.el);
		$("#myModal").reveal();
	},
	save: function(){
		alert('save');
	},
	print: function(){
		alert('print');
	},
	text: function(){
		var json = {fonts:[
			{font_label:"Delicious_500",font_value:"Delicious_500"},
			{font_label:"Quake_Cyr",font_value:"Quake_Cyr"},
			{font_label:"OdessaScript_500",font_value:"OdessaScript_500"},
			{font_label:"CA_BND_Web_Bold_700",font_value:"CA_BND_Web_Bold_700"},
			{font_label:"DejaVu_Serif_400",font_value:"DejaVu_Serif_400"},
			{font_label:"Encient_German_Gothic_400",font_value:"Encient_German_Gothic_400"},
			{font_label:"Globus_500",font_value:"Globus_500"},
			{font_label:"Modernist_One_400",font_value:"Modernist_One_400"},
			{font_label:"Tallys_400",font_value:"Tallys_400"},
			{font_label:"Terminator_Cyr",font_value:"Terminator_Cyr"},
			{font_label:"Times_New_Roman",font_value:"Times_New_Roman"},
			{font_label:"CrashCTT_400",font_value:"CrashCTT_400"},
			{font_label:"Vampire95",font_value:"Vampire95"},
			{font_label:"Gruenewald VA",font_value:"Gruenewald VA"},
			{font_label:"Little Daisy",font_value:"Little Daisy"}
		]};
		var body = Mustache.to_html($('#tpl-tool-text').html(),json);
		window.Tool = new Config({
			title: "New Text",
			baseline: "Create now our new text",
			body: body
		});
		var popup = new TextView();
		var html = popup.render();
		$("#popup").html(html.el);
		$('#colorpicker').farbtastic("#color");
		$("#myModal").reveal();
	},
	circle: function(){
		window.Tool = new Config({
			title: "New Circle",
			baseline: "Create now our new circle",
			body: $('#tpl-tool-circle').html()
		});
		var popup = new CircleView();
		var html = popup.render();
		$("#popup").html(html.el);
		$('#colorpicker').farbtastic("#color");
		$("#myModal").reveal();
	},
	rectangle: function(){
		window.Tool = new Config({
			title: "New Rect",
			baseline: "Create now our new rect",
			body: $('#tpl-tool-rectangle').html()
		});
		var popup = new RectangleView();
		var html = popup.render();
		$("#popup").html(html.el);
		$('#colorpicker').farbtastic("#color");
		$("#myModal").reveal();
	},
	clipart: function(){
		var images = [
			{id:12, name: 'chat', url: 'files/chat.svg', backgroundColor: '#000000'},
			{id:13, name: 'chien', url: 'files/chien.png', backgroundColor: '#000000'},
			{id:14, name: 'grille', url: 'files/drawing.svg', backgroundColor: '#000000'}
		];
		var tpl = $('#tpl-tool-clipart').html();
		var output = Mustache.to_html(tpl,{images:images});
		
		window.Tool = new Config({
			size: 'expand',
			title: "New Clipart",
			baseline: "Create now our new image",
			body: output
		});
		var popup = new ClipartView();
		var html = popup.render();
		$("#popup").html(html.el);
		$("#myModal").reveal();
		
		
		//TEST
		//window.canvas.clipTo = function(ctx) {
  		//	ctx.arc(0, 0, 60, 0, Math.PI*2, true);
  		//}
  
	},
	initialize: function(){
		_.bindAll(this,'render');
	},
	render: function(){
		this.$el.html(this.template);
		return this;
	}
});