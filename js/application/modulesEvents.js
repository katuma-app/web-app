"use strict";

define(function (require) {
	//dependencies
	require("marionette");
	
	var modulesEvents = function(KatumaApp){

		KatumaApp.publicModule.on("start", function(){
	        require(["views/layouts/publicLayout"], function (PublicLayout) {
	            KatumaApp.privateModule.stop();	            
	            var layout = new PublicLayout();

	            layout.on("signIn", function(){
	                KatumaApp.publicModule.trigger("signIn");
	            });

	            KatumaApp.mainRegion.show(layout);
	        });
	    });

	    KatumaApp.privateModule.on("start", function(){
	        require(["views/layouts/privateLayout"], function (PrivateLayout) {
	            KatumaApp.publicModule.stop();	            
	            var layout = new PrivateLayout();	            
	            KatumaApp.mainRegion.show(layout);
	        });
	    });
	};

    return modulesEvents;
});