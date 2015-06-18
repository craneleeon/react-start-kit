var fileset = {
    'public/js/bundle.app.js': ['web/app/app.js']
    // 'public/js/bundle.test.js': ['web/app/js/test.js']
}
var envify = require('envify/custom');
module.exports = {
    dist: {
        options: {
            transform: [
                "reactify",
                envify({
                    NODE_ENV: 'production'
                })
            ]
        },
        files: fileset
    },
    build: {
        options: {
            transform: [
                "reactify",
                envify({
                    NODE_ENV: 'development'
                })
            ]
        },
        files: fileset
    },
    dev: {
        options: {
            transform: [
                "reactify",
                envify({
                    NODE_ENV: 'development'
                })
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
