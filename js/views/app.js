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
		'click #clipart': 'clipart'
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
		$("#myModal").reveal();
	},
	preview: function(){
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
		window.Tool = new Config({
			title: "New Text",
			baseline: "Create now our new text",
			body: $('#tpl-tool-text').html()
		});
		var popup = new TextView();
		var html = popup.render();
		$("#popup").html(html.el);
		$("#myModal").reveal();
		$('#colorpicker').farbtastic('#color');
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
		$("#myModal").reveal();
	},
	clipart: function(){
		var images = [
			{id:12, name: 'chat', url: 'files/chat.svg', backgroundColor: '#000000'},
			{id:13, name: 'chien', url: 'files/chien.png', backgroundColor: '#000000'},
		];
		var tpl = $('#tpl-tool-clipart').html();
		var output = Mustache.to_html(tpl,{images:images});
		
		window.Tool = new Config({
			title: "New Clipart",
			baseline: "Create now our new image",
			body: output
		});
		var popup = new ClipartView();
		var html = popup.render();
		$("#popup").html(html.el);
		$("#myModal").reveal();
	},
	initialize: function(){
		_.bindAll(this,'render');
	},
	render: function(){
		this.$el.html(this.template);
		return this;
	}
});