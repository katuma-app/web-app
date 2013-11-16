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
        "backbone.babysitter" : "libs/backbone.babysitter"
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
        }
    }
});

define(function (require) {
    // dependencies
    var KatumaApp = require("KatumaApp");

    //start KatumaApp
    KatumaApp.start();

});