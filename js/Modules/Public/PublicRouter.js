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
        },
        createUser: function(){
            //custom initialization
        },
    });

    return PublicRouter;
});