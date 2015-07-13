module.exports = function(grunt) {

    grunt.config.set('exec', {
        webpackServerLift : 'webpack-dev-server --content-base ./tmp/public/ --port 9999',
    });

    grunt.loadNpmTasks('grunt-exec');
};
