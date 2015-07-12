var path    = require('path'),
    webpack = require('webpack');


module.exports = {
    
    entry : [
        'webpack-dev-server/client?http://0.0.0.0:9999',
        'webpack/hot/only-dev-server',
        './assets/react/indexView.jsx',   
    ],

    output: {
        path: '.tmp/public/',
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
    ]

};
