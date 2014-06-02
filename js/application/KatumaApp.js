define(function (require) {
    "use strict";
    
	//dependencies
	require("marionette");
    var modulesEvent = require("application/modulesEvents");

	//startApp
	var KatumaApp = new Backbone.Marionette.Application();

    //share variables
    KatumaApp.userModel = null;
    
    //add region
    KatumaApp.addRegions({
        mainRegion: "body",
    });

    $(KatumaApp.mainRegion.el).on("click","button",function(event){
        event.preventDefault();
    });

    //create modules
    KatumaApp.module("publicModule");
    KatumaApp.module("privateModule");
    modulesEvent(KatumaApp);

    return KatumaApp;
});