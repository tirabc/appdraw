// TODO rename Config to Tool
var Config = Backbone.Model.extend({
	defaults: function(){
		return {
			title: 'Configuration',
			baseline: 'Tool',
			body: 'Body'
		};
	}
});