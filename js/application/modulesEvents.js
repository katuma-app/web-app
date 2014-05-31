define(function (require) {
	"use strict";
	
	//dependencies
	require("marionette");
	
	var modulesEvents = function(KatumaApp){

		KatumaApp.publicModule.on("start", function(options){
			var url = options.url;
			var self =  this;

			//load dependencies Public module
	        require([
	        	"Modules/Public/Layouts/PublicLayout", 
	        	"Modules/Public/PublicRouter"], 
	        	function (PublicLayout, PublicRouter) {

	        	//start public router
				KatumaApp.publicModule.router = new PublicRouter(self, KatumaApp);
				Backbone.history.start();
				KatumaApp.publicModule.router.navigate(url,{trigger: true});
	        	
	        	//stop private module
	            KatumaApp.privateModule.stop();	            
	            
	            //create public layout and show it
	            self.layout = new PublicLayout({
	            	url: self.url,
	            	ServerManagment: KatumaApp.ServerManagment
	            });
	            KatumaApp.mainRegion.show(self.layout);

	            //layout events
	            self.layout.on("signIn", function(userModel){
	            	KatumaApp.userModel = userModel;

	            	KatumaApp.publicModule.stop();
					KatumaApp.privateModule.start({url:"user"});
	            });

	            self.layout.on("createUser", function(userModel){
	            	KatumaApp.userModel = userModel;

					KatumaApp.publicModule.stop();
					KatumaApp.privateModule.start({url:"user"});
	            });
	        });
	    });

	    KatumaApp.privateModule.on("start", function(options){
	    	var url = options.url;
	    	var userModel = KatumaApp.userModel;
			var self = this;

			//we are going to load the private layout if the user model exit, if not we trigger logOut
			if (userModel) {
				//load dependencies Private module
				require([
					"Modules/Private/Layouts/PrivateLayout",
					"Modules/Private/PrivateRouter"],
					function (PrivateLayout, PrivateRouter) {

					//start router
					KatumaApp.privateModule.router = new PrivateRouter(this, KatumaApp);
					KatumaApp.privateModule.router.navigate(url, {trigger: true});

					//create private layout and show it
					self.layout = new PrivateLayout({
						user: userModel,
						url: self.url,
		            	ServerManagment: KatumaApp.ServerManagment
					});
					KatumaApp.mainRegion.show(self.layout);

					//retrieve private layout events
					self.layout.on("logout", function(){
						KatumaApp.userModel = null;
						
						KatumaApp.privateModule.stop();
						KatumaApp.publicModule.start({url:""});
					});
				});
			}
			else{
				KatumaApp.privateModule.trigger("logOut");
			}
	    });
		
		/**
		 * When the private module stop clean the browser history and restart again in public module
		 */
		KatumaApp.privateModule.on("stop", function(){
			Backbone.history.stop();
		});

	    //public module initializer
		KatumaApp.module("publicModule", function(publicModule, KatumaApp){
            KatumaApp.publicModule.start({url:""});
	    });
	};

    return modulesEvents;
});