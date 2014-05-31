define(function (require) {
    "use strict";

    //dependecies
    require("marionette");
    require("templates");
    require("bootstrap");

    //module
    var TopbarView = Backbone.Marionette.ItemView.extend({
        template: Handlebars.templates.publicTopbarView,
        id:"topbarView",
        getFormData: function(){
        	var form = this.$('form');
			return {
				"email": form.find("[type=email]").val(),
				"password": form.find("[type=password]").val()
			};
        }
    });

    return TopbarView;
});