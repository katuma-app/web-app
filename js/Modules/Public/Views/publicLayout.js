/*
** publicLayout for user that are not register in the app. 
 */
define(function (require) {
	"use strict";

	//dependecies
	require("marionette");
	require("templates");
	require("bootstrap");

	//module
	var TopbarView = Backbone.Marionette.ItemView.extend({
        template: Handlebars.templates.publicTopbarView,
        id:"topbarView"
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
        id:"createUserView"
    });

	var PublicLayout = Backbone.Marionette.Layout.extend({
	    template: Handlebars.templates.publicLayout,
	    id:"publicLayout",
	    regions: {
	        topbarRegion: "#topbarRegion",
	        contentRegion: "#publicContentRegion"
	    },
	    onShow: function(){
			var topbarView = new TopbarView();
			this.topbarRegion.show(topbarView);

			this.navigate(this.options.url);
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
					.attr("href","#user")
					.text("< Back");
			}
			this.contentRegion.show(contentView);
		},
	    events:{
			"click .signIn": function (event) {
				event.preventDefault();
				this.trigger("signIn");
			}
		}
	});

	return PublicLayout;
});