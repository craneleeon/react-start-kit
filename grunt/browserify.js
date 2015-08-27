var fileset = {
    'public/js/bundle.app.js': ['web/app/app.js']
    // 'public/js/bundle.test.js': ['web/app/js/test.js']
}
var envify = require('envify/custom');
var assign = require('object-assign');

function makeConf(env, iswatch){
    var conf = {
        options: {
            transform: [
                ["babelify", { "blacklist": ["regenerator"] }],
                // "reactify",
                env
            ]
        },
        files: fileset
    };
    if(iswatch){
        conf.options = assign({}, conf.options, {
            watch: true,
            keepAlive: true,
            watchifyOptions: {
                verbose: true,
                delay: 600
            }
        });
    }
    return conf;

}

module.exports = {
    dist: makeConf(
        envify({
            NODE_ENV: 'production'
        })
    ),
    build: makeConf(
        envify({
            NODE_ENV: 'development'
        })
    ),
    dev: makeConf(
        envify({
            NODE_ENV: 'development'
        }),
        true
    )
    // build: {
    //     options: {
    //         transform: [
    //             "reactify",
    //             envify({
    //                 NODE_ENV: 'development'
    //             })
    //         ]
    //     },
    //     files: fileset
    // },
    // dev: {
    //     options: {
    //         transform: [
    //             "reactify",
    //             envify({
    //                 NODE_ENV: 'development'
    //             })
    //         ],
    //         watch: true,
    //         keepAlive: true,
    //         watchifyOptions: {
    //             verbose: true,
    //             delay: 600
    //         }
    //     },
    //     files: fileset
    // }

};