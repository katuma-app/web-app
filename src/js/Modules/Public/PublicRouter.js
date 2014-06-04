define(function (require) {
    "use strict";

    // dependencies
    require("marionette");

    //module
    var PublicRouter = Backbone.Marionette.AppRouter.extend({
        initialize: function(publicModule, katumaApp){
            this.publicModule = publicModule;
            this.KatumaApp = katumaApp;
        },
        routes:{
            "createUser":"createUser",
            "*welcome": "welcome",
        },
        welcome : function(){
            //custom initialization
            this.goto("welcome");
        },
        createUser: function(){
            //custom initialization
            this.goto("createUser");
        },
        goto: function(url){
            var publicModuleLayout = this.publicModule.layout;
            
            //Load the content view in the public layout for each route
            if (!publicModuleLayout || !$(publicModuleLayout.regions.contentRegion).length) {
                this.publicModule.url = url;
            }
            else {
                this.publicModule.layout.navigate(url);
            }
        }
    });

    return PublicRouter;
});