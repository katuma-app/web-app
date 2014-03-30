"use strict";

module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					// target.css file: source.less file
					"css/main.css": "css/main.less"
				}
			}
		},
		handlebars: {
			compile: {
				files: {
					"js/templates.js": ["js/templates/*.handlebars"]
				}
			},
			options: {
				namespace: "Handlebars.templates",
				// TODO I don't know why this is necessary.
				// Looks as is if precompiler and interpreter
				// don't work the same way.
				processName: function(filePath) {
					// input:  templates/name.handlebars
					var pieces = filePath.split("/");
					    pieces = pieces[pieces.length - 1].split(".");
					// output: name
					return pieces[0];
				}
			}
		},
		watch: {
			files: ['css/*.less', 'js/templates/*.handlebars'],
			tasks: ['less', 'handlebars']
		}
	});

	// Load modules
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Set default command
	grunt.registerTask("default", ["watch"]);
};