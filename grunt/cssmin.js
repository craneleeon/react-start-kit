module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '../public/css',
            src: '**/*.css',
            dest: '../dist/css'
        }]
    }
};
