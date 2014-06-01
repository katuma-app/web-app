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
	    	//public variables
	    	this.ServerManagement = this.options.ServerManagment;
			this.userModel = this.options.user;

			//show regions
			var topbarView = new TopbarView();
			var contentView = new ContentView(this.options);
			this.topbarRegion.show(topbarView);
			this.contentRegion.show(contentView);
	    },
	    events:{
			"click .signOut": function (event) {
				event.preventDefault();
				this.trigger("logout");
			},
			"click .removeUser": "removeUser"
		},
		removeUser: function(){
			var self = this;

			var removeUserOptions = {
				user: this.userModel,
				error: function(){
					console.warn("Error in removeUser");
				},
				success: function(){
					self.trigger("logout");
				}
			};

			this.ServerManagement.removeUser(removeUserOptions);
		}
	});

	return PrivateLayout;
});