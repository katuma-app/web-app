define(function (require) {
	"use strict";

	// dependencies
    require("marionette");

	var User = Backbone.Model.extend({
		resource:"users",//api rest resource
		defaults: {
			id: null,
	        created_at: null,
	        email: null,
	        name: null,
	        updated_at: null,
		}
    });
	
	return User;
});