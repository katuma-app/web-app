"use strict";

module.exports = function(grunt)
{
	grunt.initConfig({
		watch: {
			scripts: {
				files: ["js/templates/PublicModule/*.handlebars", "js/templates/PrivateModule/*.handlebars"],
				tasks: ["shell:gather_public_handlebar_files","shell:gather_private_handlebar_files", "shell:handlebars"],
				options: {
					spawn: false,
				},
			},
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
		}
	});

	//load modules
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//resgistered task
	grunt.registerTask("watcher", ["watch"]);
};