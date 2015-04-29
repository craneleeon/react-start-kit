var vars = require('./vars');
var assets_surfixs = vars.assets_surfixs;
var lessfileset = vars.less_fileset; 
module.exports = {
    options: {
        spawn: false
    },
    less: {
        options: {
            cwd: lessfileset.cwd 
        },
        files: lessfileset.src,
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
