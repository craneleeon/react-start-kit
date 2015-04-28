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
        files:[{
            expand: true,
            cwd: 'public/',
            src: ['**/*.js', '!**/*.min.js'],
            dest: 'dist/public/'
        }]

    }
};
