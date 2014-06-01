define(function (require) {
    "use strict";

    //dependecies
    require("marionette");
    require("templates");
    require("bootstrap");

    //module
    var CreateUserView = Backbone.Marionette.ItemView.extend({
        template: Handlebars.templates.createUserView,
        id:"createUserView",
        onShow:function(){
            this.errorDiv = this.$(".error");
        },
        getFormData: function(){
            var form = this.$("form");
            return {
                "email": form.find("#email").val(),
                "name": form.find("#name").val(),
                "password": form.find("#password").val(),
                "password_confirmation": form.find("#passwordConfirmation").val()
            };
        },
        removeErrors: function(){
            //remove error element layout
            var errorDiv = this.errorDiv;
                errorDiv.hide();
                errorDiv.empty();
        }
    });

    return CreateUserView;
});