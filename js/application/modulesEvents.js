"use strict";

define(function (require) {
	//dependencies
	require("marionette");
	
	var modulesEvents = function(KatumaApp){

		KatumaApp.publicModule.on("start", function(){
	        require(["controllers/publicController"], function (PublicController) {
	            KatumaApp.privateModule.stop();
	            var controller = new PublicController();
	            var layout = controller.getLayout();

	            controller.on("signIn", function(){
	                KatumaApp.publicModule.trigger("signIn");
	            });

	            KatumaApp.mainRegion.show(layout);
	        });
	    });

	    KatumaApp.privateModule.on("start", function(){
	        require(["controllers/privateController"], function (PrivateController) {
	            KatumaApp.publicModule.stop();
	            var controller = new PrivateController();
	            var layout = controller.getLayout();
	            KatumaApp.mainRegion.show(layout);
	        });
	    });
	};

    return modulesEvents;
});