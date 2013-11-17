"use strict";

module.exports = function(grunt)
{
	grunt.initConfig({
		watch: {
			scripts: {
				files: ["js/templates/*.handlebars"],
				tasks: ["shell:handlebars"],
				options: {
					spawn: false,
				},
			},
		},
		shell: {
			handlebars: {
				command: "handlebars js/templates/*.handlebars -f js/templates.js"
			}
		}
	});

	//load modules
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//resgistered task
	grunt.registerTask("watcher", ["watch"]);
};