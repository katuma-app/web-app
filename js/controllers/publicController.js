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
			this.layout.on("signIn", function(){ self.signIn(); });
		},
		getLayout: function(){
			return this.layout;
		},
		signIn: function(){
			this.trigger("signIn");
		}
	});

	

	return PublicController;
});