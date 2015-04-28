var assets_surfixs = require('./vars').assets_surfixs;
module.exports = {
    options: {
        spawn: false
    },
    css: {
        options: {
            cwd: 'web'
        },
        files: ['**/*.less', '**/*.css'],
        tasks: ['less:dev']
    },
    // js: {
    //     files: ['web/js#<{(||)}>#*.js', 'web/js#<{(||)}>#*.jsx'],
    //     tasks: ['browserify:dev']
    // },
    assets: {
        options: {
            cwd: 'web'
        },
        files: assets_surfixs,
        tasks: ['copy:dev']
    }
};
