module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					sassDir: 'css/sass',
					cssDir: 'css'
				}
			}
		},
		watch: {
		  scripts: {
		    files: ['**/*.scss'],
		    tasks: ['compass'],
		    options: {
		      spawn: false,
		    },
		  },
		},
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.registerTask('default', ['compass']);

};


