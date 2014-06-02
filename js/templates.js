(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['createUserView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"createAccount\">\n	<div class=\"container\">\n		<h1>Create account</h1>\n		<form role=\"form\">\n			<div class=\"form-group\">\n				<input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"User name\" >\n			</div>\n			<div class=\"form-group\">\n				<input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\">\n			</div>\n			<div class=\"form-group\">\n				<input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\n			</div>\n			<div class=\"form-group\">\n				<input type=\"password\" class=\"form-control\" id=\"passwordConfirmation\" placeholder=\"Password confirmation\">\n			</div>\n			<div class=\"error\" hidden></div>\n			<button id=\"createUser\" type=\"submit\" class=\"btn btn-primary\">Create Account</button>\n		</form>\n	</div>\n</div>";
  });
templates['privateContentView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div>\n	<div class=\"jumbotron\">\n		<div class=\"container\">\n	    	<h1>Welcome ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n	    	<p>\n	    		<b>Email<b/>: ";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.email); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n	    	</p>\n	    </div>\n	</div>\n</div>\n";
  return buffer;
  });
templates['privateLayout'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"topbarRegion\" class=\"navbar navbar-inverse navbar-fixed-top\"></div>\n<div id=\"contentRegion\"></div>";
  });
templates['privateTopbarView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#user\">Katuma</a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a href=\"#\" class=\"signOut\">Log Out</a></li>      \n    </ul>\n</div>";
  });
templates['publicContentView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"jumbotron\">\n\n	<div class=\"container\">\n		<div class=\"row header\">\n			<h1 data-i18n=\"header.title\">KATUMA</h1>\n			\n			<h2 class=\"slogan\" data-i18n=\"header.slogan\">Skip the middleman, buy directly from the providers.</h2>\n		</div>\n	</div><!--container-->\n\n	<div class=\"services\">\n		<div class=\"container\">\n			<div class=\"row\">\n				<div class=\"col-lg-4\">\n					<p data-i18n=\"services.1\">Easily create collaborative consumption groups.</p>\n				</div>\n				<div class=\"col-lg-4\">\n					<p data-i18n=\"services.2\">Build a meaningful relationship with the providers.</p>\n				</div>\n				<div class=\"col-lg-4\">\n					<p data-i18n=\"services.3\">An alternative marketplace for providers.</p>\n				</div>\n            </div>\n          </div>\n        </div>\n    </div><!--.services-->\n\n    <div class=\"container signin\">\n		<!-- Example row of columns -->\n		<div class=\"row description\">\n			<div class=\"col-lg-12\">\n				<p data-i18n=\"[html]signin.description\"><strong>KATUMA</strong> is a <strong>tool</strong> for <strong>collaborative consumption</strong> groups administrators, members and providers.</p>\n			</div>\n		</div>\n		\n		<div class=\"row register\">\n			<div class=\"col-lg-12\">\n				<!-- Begin MailChimp Signup Form -->\n				<div id=\"mc_embed_signup\">\n					<form action=\"http://katuma.us3.list-manage2.com/subscribe/post?u=c1fa2ee78d0632dc9cecbffab&amp;id=046995e05b\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"form-inline\" role=\"form\" target=\"_blank\" novalidate>\n						<div class=\"mc-field-group\">\n\n							<p data-i18n=\"[html]signin.question\">\n								Want to be the <strong>first to know</strong> when we realease the beta?</p>\n\n							<div class=\"form-group\">\n								<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n                  				<div style=\"position: absolute; left: -5000px;\"><input type=\"text\" name=\"b_c1fa2ee78d0632dc9cecbffab_046995e05b\" value=\"\"></div>\n								<input type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\" placeholder=\"Your email\" data-i18n=\"[placeholder]signin.placeholder\">\n							</div>\n\n							<input type=\"submit\" value=\"SUBSCRIBE\" name=\"subscribe\" id=\"mc-embedded-subscribe\" data-i18n=\"[value]signin.submit\">\n						</div>\n\n						<div id=\"mce-responses\" class=\"clear\">\n							<div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\n							<div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\n						</div>\n            		</form>\n				</div>\n				<!-- End MailChimp Signup Form -->\n			</div><!--end col-->\n		</div><!--end row register-->\n	</div>\n\n	<div class=\"footer\">\n		<div class=\"container\">\n			<div class=\"row\">\n				<div class=\"col-lg-4\">\n					<p>\n						<a href=\"https://github.com/coopdevs\">\n							<i class=\"fa fa-github\"></i> <span data-i18n=\"footer.github\">KATUMA is open source</span>\n						</a>\n					</p>\n\n				</div>\n\n				<div class=\"col-lg-4\">\n					<p>\n						<a href=\"https://twitter.com/katuma_org\">\n							<i class=\"fa fa-twitter\"></i> <span data-i18n=\"footer.twitter\">Follow us on twitter</span>\n						</a>\n					</p>\n				</div>\n				<div class=\"col-lg-4\">\n					<p>\n						<a href=\"mailto:info@katuma.org\">\n							<i class=\"fa fa-envelope\"></i> <span data-i18n=\"footer.contact\">Contact us</span>\n						</a>\n					</p>\n				</div>\n			</div>\n		</div><!-- /container -->\n		<p id=\"languages\">\n			<a href=\"#\" language=\"en\">English</a> | <a href=\"#\" language=\"ca\">Catalan</a>  | <a href=\"#\" language=\"es\">Español</a>\n		</p>\n	</div><!--footer-->";
  });
templates['publicLayout'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"topbarRegion\" class=\"navbar navbar-inverse navbar-fixed-top\"></div>\n<div id=\"publicContentRegion\"></div>";
  });
templates['publicTopbarView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n    </div>\n\n    <div class=\"navbar-collapse collapse\">\n        <ul class=\"nav navbar-nav\">\n            <li>\n                <a id=\"leftButton\" href=\"#createUser\">Sign up</a>\n            </li>\n        </ul>\n        <form class=\"navbar-form navbar-right\">\n            <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"Email\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" placeholder=\"Password\" class=\"form-control\">\n            </div>\n            <button id=\"\" type=\"submit\" class=\"btn btn-success signIn\">Sign in</button>\n        </form>\n    </div><!--/.navbar-collapse -->\n</div>";
  });
})();