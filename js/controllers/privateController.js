"use strict";

define(function (require) {
	//dependencies
	require("marionette");
	var PrivateLayout = require("views/layouts/privateLayout");

	//module
	var PublicController = Backbone.Marionette.Controller.extend({
		initialize: function(){
			var self = this;

			this.layout = new PrivateLayout();

			//layout events
			this.layout.on("login", function(){ self.signIn(); });
		},
		getLayout: function(){
			return this.layout;
		},
		signIn: function(){
			window.location.hash = "#user";
		}
	});

	

	return PublicController;
});