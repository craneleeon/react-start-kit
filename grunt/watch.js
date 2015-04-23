var assets_surfixs = require('./vars').assets_surfixs;
module.exports = {
  css: {
    files: ['web/css/**/*.less', 'web/css/**/*.css'],
    tasks: ['less:build']
  },
  js: {
    files: ['web/js/**/*.js', 'web/js/**/*.jsx' ],
    tasks: ['browserify:dev']
  },
  assets:{
    options: {
        cwd: 'web'
    },
    files: assets_surfixs,
    tasks: ['copy:build']
  }
};
