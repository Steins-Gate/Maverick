module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                beautify: true,
                mangle: {
                    except: ['jQuery', 'Backbone','angualr','$scope',
                        '$',
                        'element',
                        'ngModelCtrl',
                        'ng',
                        'scope',
                        'attr',
                        'text'
                    ]
                }
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

