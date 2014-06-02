/**	
 * This module is going to contain all the method to call to Katuma Server.
 * This module is going to be share in the whole katuma app.
 */
define(function (require) {
	"use strict";

	//private variables
	var url = "http://localhost:3000/api/v1/";

	//public methods
	return {
		/**
		 * [createUser method that is going to create a user calling to katuma server]
		 * @param  {[object]} options [properties for the ajax call:]
		 */
		createUser:function(options){
			/**
			 * [options example]
			 	var options = {
			 		userData: {
						"email": "adrianortuzar@gmail.com",
				        "name": "adrianortuzar",
				        "password": "secret",
				        "password_confirmation": "secret"
			 		},
			 		error: function(error){
						//do something in the callback
			 		},
			 		success: function(response){
						//do something in the callback
			 		}
		    	};
			 */
			$.ajax({
		        url: url+"users",
		        type: "POST",
				dataType: "json",
				data: {
		        	"user":options.userData
		        },
		        error: options.error,
				success: options.success
		    });
		}
	};
});