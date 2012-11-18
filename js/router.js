var AppRouter = Backbone.Router.extend({
    routes: {
 		"*page": "start"
    },
    start: function(){
		var page = new AppView();
		var html = page.render();
		$("#main-view").append(html.el);
		$("#myModal").reveal();
    }
});