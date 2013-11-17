"use strict";

define(function (require) {
	//dependencies
	require("marionette");
	var PublicLayout = require("views/layouts/publicLayout");

	//module
	var PublicController = Backbone.Marionette.Controller.extend({
		initialize: function(){
			var self = this;

			this.layout = new PublicLayout();

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