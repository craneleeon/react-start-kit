var assign = require('object-assign');
var dest_build = {dest: 'public'};
var src_assets = {src: require('./vars').assets_surfixs};
var fileset = {
    expand: true,
    cwd: 'web/'
};
var fileset_build = assign({}, fileset, src_assets, dest_build);

module.exports = {
    dev:{},
    build: {
        files: [fileset_build]
    },
    dist: {
        files:[
            {
                expand: true,
                cwd: 'public/',
                src: ['**/*.*', '!**/*.js', '**/*.min.js'],
                dest: 'dist/public/'
            },
            {
                src: "server.js",
                dest: "dist/server.js"
            },
            {
                expand: true,
                cwd: 'backend/',
                src: ['**/*.js'],
                dest: 'dist/backend/'
            }
        ]
    }
};
