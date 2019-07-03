module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                beautify: false,
                mangle: false,
                preserveComments: false
            },
            my_target: {
                files: {
                    'dest/output.js': ['js/a.js']
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};

