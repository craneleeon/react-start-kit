var assign = require('object-assign');
var fileset = {
            expand: true,
            cwd: 'web',
            src: ['**/*.less'],
            ext: '.css'
        };
var fileset_build = assign({}, fileset, {dest: 'public'});

module.exports = {
    dev:{},
    build: {
        files: [fileset_build]
    },
    dist: {
        options: {
            compress: true
        },
        files: [fileset_build]
    }

};
