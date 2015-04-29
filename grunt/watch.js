var vars = require('./vars');
var assets_surfixs = vars.assets_surfixs;

module.exports = {
    options: {
        spawn: false
    },
    less: {
        options: {
            cwd: 'web/less' 
        },
        files: '**/*.less',
        tasks: ['less:build']
    },
    assets: {
        options: {
            cwd: 'web'
        },
        files: assets_surfixs,
        tasks: ['copy:dev']
    }
};
