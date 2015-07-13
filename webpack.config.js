var path    = require('path'),
    webpack = require('webpack');

var inDevelopment = (process.env.NODE_ENV === 'development');

var entry = inDevelopment ?
    [ 'webpack-dev-server/client?http://0.0.0.0:9999',
      'webpack/hot/only-dev-server',
      './assets/react/indexView.jsx', ] :

    './assets/react/indexView.jsx';


module.exports = {
    
    entry : entry,

    output: {
        path: '/home/paul/AVAIL/SailsHotLoading/sails-with-react-hot-loader/.tmp/public/',
        filename: 'bundle.js',
        publicPath: inDevelopment ? 'http://localhost:9999/' : '',
    },

    module: {
        loaders: inDevelopment ? 
                    [ { test: /\.jsx$|react\.js/, loaders: ['react-hot', 'jsx-loader?harmony'], }, ] :
                    [ { test: /\.jsx$|react\.js/, loaders: ['jsx-loader?harmony'], }, ],


        include: /assets/,
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    watch: inDevelopment,

    inline: inDevelopment,

    plugins: inDevelopment ? 
                [ new webpack.HotModuleReplacementPlugin(),
                  new webpack.NoErrorsPlugin() ] :
                [],

    proxy: inDevelopment ? { "*": "http://localhost:1337" } : undefined,

};
