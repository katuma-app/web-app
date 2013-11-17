"use strict";

/*
** publicLayout for user that are not register in the app. 
 */
define(function (require) {
	//dependecies
	require("marionette");
	require("templates");
	require("bootstrap");

	//module
	var TopbarView = Backbone.Marionette.ItemView.extend({
        template: Handlebars.templates.privateTopbarView,
        id:"topbarView"
    });

    var ContentView = Backbone.Marionette.ItemView.extend({
        template: Handlebars.templates.privateContentView,
        id:"contentView"
    });

	var PublicLayout = Backbone.Marionette.Layout.extend({
	    template: Handlebars.templates.publicLayout,
	    id:"privateLayout",
	    regions: {
	        topbarRegion: "#topbarRegion",
	        contentRegion: "#contentRegion"
	    },
	    onShow: function(){
			var topbarView = new TopbarView();
			var contentView = new ContentView();
			
			this.topbarRegion.show(topbarView);
			this.contentRegion.show(contentView);
	    },
	    events:{
			"click .signIn": function (event) {
				event.preventDefault();
				this.trigger("login");
			}
		}
	});

	return PublicLayout;
});