"use strict";

define(function (require) {
	//dependencies
	require("marionette");
	var PublicLayout = require("views/layouts/publicLayout");

	//module
	var KatumaApp = new Backbone.Marionette.Application();

    KatumaApp.addRegions({
        mainRegion: "body",
    });
    
    KatumaApp.on("initialize:after", function(){
        if (Backbone.history){
            Backbone.history.start();
        }
    });

    KatumaApp.on("initialize:before", function(){
        //create Layouts
        var layout = new PublicLayout();
        this.mainRegion.show(layout);

    });

    return KatumaApp;
});