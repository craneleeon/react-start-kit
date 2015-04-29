module.exports = {
    less_fileset: {
        expand: true,
        cwd: 'web/less',
        src: ['*.less'],
        ext: '.css',
        dest: 'public/css'
    },
    assets_surfixs: ['**/*.js', '!app/**/*.js', '**/*.css', '**/*.html', '**/*.htm', '**/*.png', '**/*.jpg', '**/*.svg', '**/*.swf']
};
