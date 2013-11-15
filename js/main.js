"use strict";

require.config({
    urlArgs: "nocache=" + (new Date()).getTime(), // In order to expire
    baseUrl: "js/libs",
    paths : {
        backbone : "backbone",
        underscore : "underscore",
        jquery : "jquery-1.10.1",
        marionette : "backbone.marionette.min",
        "backbone.wreqr" : "backbone.wreqr",
        "backbone.eventbinder" : "backbone.eventbinder",
        "backbone.babysitter" : "backbone.babysitter"
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
    }
});

define(function (require) {
    // dependencies
    require("marionette");

    //start Katuma app
    new Backbone.Marionette.Application();
});