// TODO rename Config to Tool
var Config = Backbone.Model.extend({
	defaults: function(){
		return {
			size: 'medium',
			title: 'Configuration',
			baseline: 'Tool',
			body: 'Body'
		};
	}
});