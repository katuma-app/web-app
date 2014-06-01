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
        	this.ServerManagment = options.ServerManagment;
        	this.userModel = options.user;
			this.template = this.template(options.user.attributes);
		},
		events: {
			"click .saveUserData":"saveUserData"
		},
		saveUserData: function(){
			var form = this.$("form");

			var newUserData = {
				"name": form.find("#name").val(),
				"email": form.find("#email").val()
			};

			var optionsRequest = {
				userModel: this.userModel,
				newUserData: newUserData,
				error:function(error){
					debugger;
				},
				success:function(response){
					debugger;
				}	
			};
			
			this.ServerManagment.saveUser(optionsRequest);
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
			"click .signOut":"logOut",
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
					self.logOut();
				}
			};

			this.ServerManagement.removeUser(removeUserOptions);
		},
		logOut: function(){
			this.trigger("logout");
		}
	});

	return PrivateLayout;
});