"use strict";

define(function (require) {
	//dependencies
	require("marionette");
    var modulesEvent = require("application/modulesEvents");

	//startApp
	var KatumaApp = new Backbone.Marionette.Application();
    
    //create modules
    KatumaApp.module("publicModule");
    KatumaApp.module("privateModule");
    modulesEvent(KatumaApp);

    //add region
    KatumaApp.addRegions({
        mainRegion: "body",
    });

    return KatumaApp;
});