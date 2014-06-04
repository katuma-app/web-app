define(function (require) {
	"use strict";

	// dependencies
    require("marionette");
    var ServerManagment = require("Modules/Commons/ServerManagment");

	var User = Backbone.Model.extend({
		
		resource:"users",//api rest resource
		defaults: {
			id: null,
	        created_at: null,
	        email: null,
	        name: null,
	        updated_at: null,
		},
		initialize:function(){
			this.url = ServerManagment.url+"users/"+this.get('id');
			
		}
    });
	
	return User;
});