define(function (require) {
    "use strict";

    // dependencies
    require("marionette");

    //module
    var PrivateRouter = Backbone.Marionette.AppRouter.extend({
        initialize: function(privateModule, katumaApp){
            this.privateModule = privateModule;
            this.KatumaApp = katumaApp;
        },
        routes:{
            "*user": "user",
        },
        user : function(){
            //custom initialization   
        }
    });

    return PrivateRouter;
});