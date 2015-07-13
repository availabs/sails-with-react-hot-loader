var path    = require('path'),
    webpack = require('webpack');

var entry = (process.env.NODE_ENV === 'development') ?
    [ 'webpack-dev-server/client?http://0.0.0.0:9999',
      'webpack/hot/only-dev-server',
      './assets/react/indexView.jsx', ] :

    './assets/react/indexView.jsx';


module.exports = {
    
    entry : entry,

    output: {
        path: '/home/paul/AVAIL/SailsHotLoading/sails-with-react-hot-loader/.tmp/public/',
        filename: 'bundle.js',
        publicPath: 'http://localhost:9999/',
    },

    module: {
        loaders: [ { test: /\.jsx$|react\.js/, loaders: ['react-hot', 'jsx-loader?harmony'], }, ],

        include: /assets/,
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    watch: true,

    inline: true,

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],

    proxy: { "*": "http://localhost:1337" },

};
