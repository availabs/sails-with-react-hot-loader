module.exports = function(grunt) {

    grunt.config.set('exec', {
        startWebpackServer: 'webpack-dev-server --content-base ./tmp/public/ --hot --port 9999'
    });

    grunt.loadNpmTasks('grunt-exec');
};
