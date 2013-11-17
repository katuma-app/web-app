"use strict";

define(function (require) {
	//dependencies
	require("marionette");

	//module
	var KatumaApp = new Backbone.Marionette.Application();
    var publicModule = KatumaApp.module("publicModule");
    var privateModule = KatumaApp.module("privateModule");

    KatumaApp.addRegions({
        mainRegion: "body",
    });
    
    publicModule.on("start", function(){
        require(["controllers/publicController"], function (PublicController) {
            KatumaApp.privateModule.stop();
            var controller = new PublicController();
            var layout = controller.getLayout();
            KatumaApp.mainRegion.show(layout);
        });
    });

    privateModule.on("start", function(){
        require(["controllers/privateController"], function (PrivateController) {
            KatumaApp.publicModule.stop();
            var controller = new PrivateController();
            var layout = controller.getLayout();
            KatumaApp.mainRegion.show(layout);
        });
    });

    return KatumaApp;
});