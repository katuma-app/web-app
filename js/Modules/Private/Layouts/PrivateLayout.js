/*
** publicLayout for user that are not register in the app. 
 */
define(function (require) {
	"use strict";

	//dependecies
	require("marionette");
	require("templates");
	require("bootstrap");

	//Views
	var TopbarView = Backbone.Marionette.ItemView.extend({
        template: Handlebars.templates.privateTopbarView,
        id:"topbarView"
    });

    var ContentView = Backbone.Marionette.ItemView.extend({
        template: Handlebars.templates.privateContentView,
        id:"contentView",
        initialize:function(options){
			this.template = this.template(options.user.attributes);
		}
    });


    //Module
	var PrivateLayout = Backbone.Marionette.Layout.extend({
	    template: Handlebars.templates.privateLayout,
	    id:"privateLayout",
	    regions: {
	        topbarRegion: "#topbarRegion",
	        contentRegion: "#contentRegion"
	    },
	    onShow: function(){
			var topbarView = new TopbarView();
			var contentView = new ContentView(this.options);
			
			this.topbarRegion.show(topbarView);
			this.contentRegion.show(contentView);
	    },
	    events:{
			"click .signOut": function (event) {
				event.preventDefault();
				this.trigger("logout");
			}
		}
	});

	return PrivateLayout;
});