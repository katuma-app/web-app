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
		watch: {
			scripts: {
				files: ["js/templates/*.handlebars"],
				tasks: ["shell:handlebars"],
				options: {
					spawn: false
				}
			},
			styles: {
				// Which files to watch (all .less files recursively in the less directory)
				files: ['css/*.less'],
				tasks: ['less'],
				options: {
					nospawn: true
				}
			}
		},
		shell: {
			handlebars: {
				command: "handlebars js/templates/*.handlebars -f js/templates.js"
			}
		}
	});

	// Load modules
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Set default command
	grunt.registerTask("default",["watch"]);
};