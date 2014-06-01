require.config({
    urlArgs: "nocache=" + (new Date()).getTime(), // In order to expire
    baseUrl: "js",
    paths : {
        backbone : "libs/backbone/backbone",
        underscore : "libs/underscore/underscore",
        jquery : "libs/jquery/dist/jquery",
        marionette : "libs/backbone.marionette/lib/backbone.marionette",
        handlebars: "libs/handlebars/handlebars",
        templates: "templates",
        "backbone.wreqr" : "libs/backbone.wreqr/lib/backbone.wreqr",
        "backbone.babysitter" : "libs/backbone.babysitter/lib/backbone.babysitter",
        bootstrap:"libs/bootstrap/dist/js/bootstrap",
        i18next:"libs/i18next/i18next"
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
    "use strict";
    
    // dependencies
    require("marionette");

    //load katuma application.
    require("application/KatumaApp");
});