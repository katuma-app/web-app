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
		shell: {
			gather_public_handlebar_files: {
				command: "cp -f js/templates/PublicModule/* js/templates/_gather_handlebars"
			},
			gather_private_handlebar_files: {
				command: "cp -f js/templates/PrivateModule/* js/templates/_gather_handlebars",
			},
			handlebars: {
				command: "handlebars js/templates/_gather_handlebars/*.handlebars -f js/templates.js"
			}
		},
		watch: {
			scripts: {
				files: ["js/templates/PublicModule/*.handlebars", "js/templates/PrivateModule/*.handlebars"],
				tasks: ["shell:gather_public_handlebar_files","shell:gather_private_handlebar_files", "shell:handlebars"]
			}
		}
	});

	// Load modules
	grunt.loadNpmTasks("grunt-contrib-handlebars");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");

	// Set default command
	grunt.registerTask("default", ["watch"]);
};