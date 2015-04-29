var fileset = {
    expand: true,
    cwd: 'web/less',
    src: ['**/*.less'],
    ext: '.css',
    dest: 'public/css'
};

module.exports = {
    dev: {},
    build: {
        files: [fileset]
    },
    dist: {
        options: {
            compress: true
        },
        files: [fileset]
    }

};
