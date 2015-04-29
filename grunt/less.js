var fileset = require('./vars.js').less_fileset;  

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
