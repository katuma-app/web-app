"use strict";

define(function (require) {
    // dependencies
    require("marionette");
    var KatumaApp = require("application/KatumaApp");

    //module
    var Router = Backbone.Marionette.AppRouter.extend({
        initialize: function(){
            var self = this;

            KatumaApp.publicModule.on("signIn", function(){
                self.navigate("user", {trigger: true});
            });
        },

        routes:{
            //private routes
            "user":"user",
            "user/*path":"user",

            //public routes
            "*public": "public",
        },

        public : function(url){
            if (url) {
                console.warn("Url '"+url+"' doesnt exist");
            }
            else{
                (url) ? url : url = "/";
                console.log("Url '"+url+"' exist");
            }
            
            KatumaApp.publicModule.start();
        },

        user: function(url){
            (url) ? url : url = "";
            console.log("Url 'user/"+url+"' exist");

            KatumaApp.privateModule.start();
        },
    });

    return Router;
});