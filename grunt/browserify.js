var fileset = {
    'public/js/bundle.index.js': ['web/app/index.js']
}
var envify = require('envify/custom');
var assign = require('object-assign');

function makeConf(env, iswatch){
    var conf = {
        options: {
            transform: [
                ["babelify", { "presets": ["es2015", "react"] }],
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
    test: makeConf(
        envify({
            NODE_ENV: 'test'
        })
    ),
    build: makeConf(
        envify({
            NODE_ENV: 'dev'
        })
    ),
    dev: makeConf(
        envify({
            NODE_ENV: 'dev'
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
