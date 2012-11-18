var PopupView = Backbone.View.extend({
	template: $("#tpl-popup").html(),
	events: {
		"click .close": "close"
	},
	initialize: function(){
		$(this.el).html('');
		this.tool = window.Tool;
		_.bindAll(this,'render');
	},
	render: function(){
		var output = Mustache.to_html(this.template,this.tool.toJSON());
		this.$el.html(output);
		return this;
	},
	close: function(){
		this.$el.remove();
	}
});