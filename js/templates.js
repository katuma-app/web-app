(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['publicContentView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"jumbotron\">\n    <div class=\"container\">\n        <h1>Welcome to Katuma</h1>\n        <p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n        <p><a class=\"btn btn-primary btn-lg\" href=\"#create-account\">Create Account</a></p>\n    </div>\n</div>";
  });
templates['publicLayout'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"topbarRegion\" class=\"navbar navbar-inverse navbar-fixed-top\"></div>\n<div id=\"contentRegion\"></div>";
  });
templates['publicTopbarView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Katuma</a>\n    </div>\n\n    <div class=\"navbar-collapse collapse\">\n        <ul class=\"nav navbar-nav\">\n            <li><a href=\"#create-account\">Create Account</a></li>            \n        </ul>\n        <form class=\"navbar-form navbar-right\">\n            <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"Email\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" placeholder=\"Password\" class=\"form-control\">\n            </div>\n            <button id=\"signIn\" type=\"submit\" class=\"btn btn-success\">Sign in</button>\n        </form>\n    </div><!--/.navbar-collapse -->\n</div>";
  });
})();