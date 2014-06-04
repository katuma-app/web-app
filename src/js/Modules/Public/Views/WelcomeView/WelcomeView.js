define(function (require) {
    "use strict";

    //dependecies
    require("marionette");
    require("templates");
    require("bootstrap");
    require("i18next");

    //module
    var WelcomeView = Backbone.Marionette.ItemView.extend({
        template: Handlebars.templates.publicContentView,
        id:"welcomeView",
        onShow: function(){
            //TODO:the LandingPage.js after the WelcomeView templates rendering, because this file are not prepare to be AMD. The LandingPage.js has to be refactor and apply the logic of the translation and the email to the WelcomeView. 
            //
            //Until it is done this is the solution.
            require(["Modules/Public/Views/WelcomeView/LandingPage"], function(){});
        }
    });

    return WelcomeView;
});