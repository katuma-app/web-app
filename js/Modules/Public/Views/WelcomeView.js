define(function (require) {
    "use strict";

    //dependecies
    require("marionette");
    require("templates");
    require("bootstrap");

    //module
    var WelcomeView = Backbone.Marionette.ItemView.extend({
        template: Handlebars.templates.publicContentView,
        id:"welcomeView",
        onShow: function(){
            //TODO:we have to load the i18next and the LandingPage before the templates rendering, because this file are not prepare to be AMD. The file LandingPage has to be refactor and apply the logic of the translation and the email to the public controller. Untis this will be done this is the solution.
            require(["libs/i18next-1.7.2.min"], function () {
                require(["libs/LandingPage"], function(){});
            });
        }
    });

    return WelcomeView;
});