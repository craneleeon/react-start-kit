var fileset = {
    'public/js/bundle.app.js': ['web/app/app.js']
    // 'public/js/bundle.test.js': ['web/app/js/test.js']
}
module.exports = {
    build: {
        options: {
            transform: [
                "reactify",
                "envify"
            ]
        },
        files: fileset
    },
    dev: {
        options: {
            transform: [
                "reactify",
                "envify"
            ],
            watch: true,
            keepAlive: true,
            watchifyOptions: {
                verbose: true,
                delay: 600
            }
        },
        files: fileset
    }

};
