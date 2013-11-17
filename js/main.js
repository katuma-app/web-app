"use strict";

require.config({
    urlArgs: "nocache=" + (new Date()).getTime(), // In order to expire
    baseUrl: "js",
    paths : {
        backbone : "libs/backbone",
        underscore : "libs/underscore",
        jquery : "libs/jquery-1.10.1",
        marionette : "libs/backbone.marionette.min",
        handlebars: "libs/handlebars-v1.1.2",
        templates: "templates",
        "backbone.wreqr" : "libs/backbone.wreqr",
        "backbone.eventbinder" : "libs/backbone.eventbinder",
        "backbone.babysitter" : "libs/backbone.babysitter",
        bootstrap:"libs/bootstrap.min"
    },
    shim : {
        jquery : {
            exports : "jQuery",
        },
        underscore : {
            exports : "_"
        },
        backbone : {
            deps : ["jquery", "underscore"],
            exports : "Backbone",
        },
        marionette:{
            deps:["backbone"]
        },
        handlebars: {
            exports : "Handlebars",
        },
        templates: {
            deps: ["handlebars"]
        },
        bootstrap:{
            deps:["jquery"]
        }
    }
});

define(function (require) {
    // dependencies
    require("marionette");
    var KatumaApp = require("KatumaApp");

    //module
    var AppRouter = Backbone.Marionette.AppRouter.extend({
        routes:{
            //private routes
            "user":"user",
            "user/*path":"user",

            //public routes
            "*public": "public",
        },
        public : function(url){
            if(url){
                console.warn("Url '"+url+"' doesnt exist");
            }else{
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

    new AppRouter();

    Backbone.history.start();
});