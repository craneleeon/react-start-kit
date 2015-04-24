var assets_surfixs = require('./vars').assets_surfixs;
module.exports = {
    options: {
        spawn: false
    },
    css: {
        files: ['web/css/**/*.less', 'web/css/**/*.css'],
        tasks: ['less:dev']
    },
    js: {
        files: ['web/js/**/*.js', 'web/js/**/*.jsx'],
        tasks: ['browserify:dev']
    },
    assets: {
        options: {
            cwd: 'web'
        },
        files: assets_surfixs,
        tasks: ['copy:dev']
    }
};
