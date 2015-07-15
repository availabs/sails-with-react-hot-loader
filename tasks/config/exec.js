module.exports = function(grunt) {

    grunt.config.set('exec', {
        webpackDevServerLift : 'node webpackDevServer.js',
    });

    grunt.loadNpmTasks('grunt-exec');
};
