# katuma Web Application

Javascrip, Html and Css application for browsers.

### How to install

Clone the repository:

    $ git clone https://github.com/coopdevs/katuma_webApp.git

Install nodejs http://nodejs.org/

Install global packages:
	
	$ npm install handlebars -g
	$ npm install -g bower

Install the dependencies:

    $ cd katuma_webApp
    $ npm install
    $ cd src
    $ bower install
    
Run the server:

	$ node server.js
	
go to http://localhost:4000/

Run grunt "watch" task to compile handlebar template and less css each time it is modified. (Grunt instalation http://gruntjs.com/getting-started)
	
	$ cd katuma_webApp
    $ grunt watch


## Frameworks and tools that we are using:

- Backbone http://backbonejs.org/
- Marionette http://marionettejs.com/#download
- Bootstrap http://getbootstrap.com/
- Less.css http://lesscss.org/
- Grunt.js http://gruntjs.com/
- Handlebars http://handlebarsjs.com/
- Require.js http://requirejs.org/


