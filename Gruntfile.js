module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.config( 'jshint', require('./grunt/jshint.js') );
  grunt.config( 'less', require('./grunt/less.js') );
  grunt.config( 'browserify', require('./grunt/browserify.js') );
  grunt.config( 'watch', require('./grunt/watch.js') );
  grunt.config( 'clean', require('./grunt/clean.js') );
  grunt.config( 'uglify', require('./grunt/uglify.js') );
  grunt.config( 'copy', require('./grunt/copy.js') );

  grunt.registerTask('build', ['browserify:build', 'less:build', 'copy:build']);
  grunt.registerTask('cleanbuild', ['clean:build', 'build']);
  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('dist', ['clean:dist', 'cleanbuild', 'uglify', 'less:dist', 'copy:dist']);

  grunt.registerTask('default', ['jshint']);

};
