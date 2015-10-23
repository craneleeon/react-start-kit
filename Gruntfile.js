var path = require('path');
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    // require('time-grunt')(grunt);
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concurrent: {
            target: {
                tasks: ['browserify:dev', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });

    // grunt.config('jshint', require('./grunt/jshint.js'));
    grunt.config('less', require('./grunt/less.js'));
    grunt.config('browserify', require('./grunt/browserify.js'));
    grunt.config('watch', require('./grunt/watch.js'));
    grunt.config('clean', require('./grunt/clean.js'));
    grunt.config('uglify', require('./grunt/uglify.js'));
    grunt.config('copy', require('./grunt/copy.js'));

    grunt.event.on('watch', function(action, filepath, target) {
        var fpath = filepath.replace('web/', '');
        if (grunt.file.isMatch(grunt.config('watch.assets.files'), fpath)) {
            grunt.config('copy.dev.src', filepath);
            grunt.config('copy.dev.dest', path.join('public/', fpath));
        }
    });

    grunt.registerTask('build', ['copy:build', 'browserify:build', 'less:build']);
    grunt.registerTask('cleanbuild', ['clean:build', 'build']);
    grunt.registerTask('dev', ['concurrent:target']);
    grunt.registerTask('devj', ['browserify:dev']);
    grunt.registerTask('devw', ['watch']);
    grunt.registerTask('dist', ['clean:dist', 'clean:build', 'copy:build', 'browserify:dist', 'less:dist', 'copy:dist', 'uglify:dist']);

    grunt.registerTask('default', ['dev']);

};
