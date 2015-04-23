var assign = require('object-assign');
var dest_build = {dest: 'public'};
var dest_dist = {dest: 'dist/public'};
var src_html = {src: require('./vars').assets_surfixs};
var fileset = {
    expand: true,
    cwd: 'web/'
};
var fileset_build = assign({}, fileset, src_html, dest_build);
var fileset_dist = assign({}, fileset, src_html, dest_dist);


module.exports = {
    build: {
        files: [fileset_build]
    },
    dist: {
        files: [fileset_dist]
    }
};
