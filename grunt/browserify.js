var fileset = {
        'public/js/bundle.app.js': ['web/js/app.js']
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
            watchifyOptions: {
                verbose: true,
                delay: 600
            }
        },
        files: fileset
    }

};
