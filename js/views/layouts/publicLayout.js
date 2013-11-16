"use strict";

/*
** publicLayout for user that are not register in the app. 
 */
define(function (require) {
	require("marionette");
	require("templates");

	var PublicLayout = Backbone.Marionette.Layout.extend({
	    template: Handlebars.templates.publicLayout,
	    regions: {
	        menu: "#topbar",
	        content: "#content"
	    }
	});

	return PublicLayout;
});