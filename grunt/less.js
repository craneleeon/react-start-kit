var fileset = {
    "public/css/style.default.css": "web/less/style.default.less"
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
