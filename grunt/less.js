var assign = require('object-assign');
var fileset = {
            expand: true,
            cwd: 'web/css/',
            src: ['*.less', '*.css'],
            ext: '.css'
        };
var fileset_build = assign({}, fileset, {dest: 'public/css'});
var fileset_dist = assign({}, fileset, {dest: 'dist/public/css'});

module.exports = {
    dev:{},
    build: {
        files: [fileset_build]
    },
    dist: {
        options: {
            compress: true
        },
        files: [fileset_dist]
    }

};
