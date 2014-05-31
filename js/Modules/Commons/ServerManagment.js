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
		**/
		createUser:function(options){
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
		},

		/**
		 * [createSession description]
		 * @param  {[type]} options [description]
		 * @return {[type]}         [description]
		 */
		createSession:function(options){
			var Session = Backbone.Model.extend({
				url:url+"session",
			});

			var session = new Session(options.data);

			session.save(null,{
				error: options.error,
				success: options.success
			});

			return session;
		},

		/**
		 * [getBootstrapData description]
		 * @return {[type]} [description]
		 */
		getUser:function(options){
			var sessionModel = options.sessionModel;
			
			$.ajax({
		        url: url+"users/"+sessionModel.get("user_id"),
		        type: "GET",
				dataType: "json",
				headers:{
					"Content-Type":"application/json",
					"Authorization": "Token "+sessionModel.get("access_token")+""
				},
		        error: options.error,
				success: options.success
		    });
		}
	};
});