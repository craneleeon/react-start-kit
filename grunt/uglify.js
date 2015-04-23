module.exports = {
    dist: {
        options: {
            sourceMap: false,
            compress: {
                global_defs: {
                    "DEBUG": false
                },
                dead_code: true
            }
        },
        files: [{
            expand: true,
            cwd: 'public/js',
            src: '**/*.js',
            dest: 'dist/public/js'
        }]

    }
};
