/*
** publicLayout for user that are not register in the app. 
 */
define(function (require) {
	"use strict";

	//dependecies
	require("marionette");
	require("templates");
	require("bootstrap");
	var User = require("models/User");

	//views
	var TopbarView = require("Modules/Public/Views/TopbarView");
	var WelcomeView = require("Modules/Public/Views/WelcomeView/WelcomeView");
	var CreateUserView = require("Modules/Public/Views/CreateUserView");

    //module
	var PublicLayout = Backbone.Marionette.Layout.extend({
	    template: Handlebars.templates.publicLayout,
	    id:"publicLayout",
	    regions: {
	        topbarRegion: "#topbarRegion",
	        contentRegion: "#publicContentRegion"
	    },
	    onShow: function(){
	    	//set variables
	    	var url = this.options.url;
	    	this.ServerManagment = this.options.ServerManagment;

	    	//render top bar region
			var topbarView = new TopbarView();
			this.topbarRegion.show(topbarView);

			//render the content region
			this.navigate(url);
	    },
	    navigate: function(url){
			var contentView;
			var leftButton = this.topbarRegion.$el.find('#leftButton');
			
			if( url === "welcome" || url === "/"){
				contentView = new WelcomeView();
				leftButton
					.attr('href','#createUser')
					.text("Sing Up");
			}
			else if ( url === "createUser"){
				contentView = new CreateUserView();

				leftButton
					.attr("href","#")
					.text("< Back");
			}
			this.contentRegion.show(contentView);
		},
	    events:{
			"click .signIn": "signIn",
			"click #createUser":"createUser"
		},
		createUser: function(event){
			event.preventDefault();
			var self = this;
			var createAccountView = this.contentRegion.currentView;
			var userData = createAccountView.getFormData();
			createAccountView.removeErrors();

		    var createUserOptions = {
		    	userData: userData,
		    	error: function(error){			        
					if(error.responseJSON){
		                var errors = error.responseJSON.errors;
		                var errorDiv = createAccountView.errorDiv;
		                
		                $.each(errors, function(index, value){
		                    console.log("ERROR "+(index+1)+": " + value);
		                    errorDiv.append("<p class='bg-danger'>"+value+"</p>");
						});

						errorDiv.show();
		            }
				},
				success: function(response){
					var userData = response.users[0];					
					var user = new User(userData);
					self.trigger("createUser", user);
				}
		    };

		    //call to the server
		    this.ServerManagment.createUser(createUserOptions);
		},
		signIn: function(){
			var self = this;
			var topbarView = this.topbarRegion.currentView;
			var data = topbarView.getFormData();
			data = {
				email:"a@a.a",
				password:"a"
			};
			
			var options = {
				data:data,
				error: function(error){
					console.warn("ERROR in Sign In:"+error.statusText);
				},
				success: function(sessionModel){
					self.getUserData(sessionModel);
				}
			};

			this.ServerManagment.createSession(options);
		},
		getUserData: function(sessionModel){
			var self = this;

			var options = {
				sessionModel: sessionModel,
				error: function(session, error, request){
					if(error.responseJSON){
		                var errors = error.responseJSON.errors;
		                $.each(errors, function(index, value){
		                    console.log("ERROR "+(index+1)+": " + value);
		                });
		            }

		            session.destroy();
				},
				success: function(response){
					var userData = response.users[0];				
					var userModel = new User(userData);
					userModel.set("sessionModel",sessionModel);
					self.trigger("signIn", userModel);
				}
			};

			this.ServerManagment.getUser(options);
		}
	});

	return PublicLayout;
});