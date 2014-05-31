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

	//module
	var TopbarView = Backbone.Marionette.ItemView.extend({
        template: Handlebars.templates.publicTopbarView,
        id:"topbarView",
        getFormData: function(){
        	var form = this.$('form');
			return {
				"email": form.find("[type=email]").val(),
				"password": form.find("[type=password]").val()
			};
        }
    });

    var WelcomeView = Backbone.Marionette.ItemView.extend({
        template: Handlebars.templates.publicContentView,
        id:"welcomeView",
        onShow: function(){
        	//TODO:we have to load the i18next and the LandingPage before the templates rendering, because this file are not prepare to be AMD. The file LandingPage has to be refactor and apply the logic of the translation and the email to the public controller. Untis this will be done this is the solution.
			require(["libs/i18next-1.7.2.min"], function () {
				require(["libs/LandingPage"], function(){});
			});
        }
    });

    var CreateUserView = Backbone.Marionette.ItemView.extend({
        template: Handlebars.templates.createUserView,
        id:"createUserView",
        onShow:function(){
        	this.errorDiv = this.$(".error");
        },
        getFormData: function(){
        	var form = this.$('form');
        	return {
		        "email": form.find("#email").val(),
		        "name": form.find("#name").val(),
		        "password": form.find("#password").val(),
		        "password_confirmation": form.find("#passwordConfirmation").val()
		    };
        },
        removeErrors: function(){
        	//remove error element layout
		    var errorDiv = this.errorDiv;
		    	errorDiv.hide();
		    	errorDiv.empty();
        }
    });

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
		signIn: function(event){
			var self = this;
			var topbarView = this.topbarRegion.currentView;
			var data = topbarView.getFormData();
			
			var options = {
				data:data,
				error: function(session, error, request){
					console.warn("ERROR in Sign In:"+error.statusText);

		            session.destroy();
				},
				success: function(sessionModel, attributes, request){
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
					self.trigger("signIn", userModel);
				}
			};

			this.ServerManagment.getUser(options);
		}
	});

	return PublicLayout;
});