var path = require('path');
var webpack = require('webpack');

var webpackConfig;

if (process.env.NODE_ENV === 'development') {

    webpackConfig = {
        devtool: 'eval',
        entry: [
          'webpack-dev-server/client?http://localhost:11235',
          'webpack/hot/only-dev-server',
          './assets/react/indexView.jsx',
        ],
        output: {
          path: path.join(__dirname, '.tmp/public'),
          filename: 'bundle.js',
          //crossOriginLoading: "use-credentials",
          publicPath: 'http://localhost:11235/',
        },
        plugins: [
          new webpack.NoErrorsPlugin(),
          new webpack.HotModuleReplacementPlugin(),
          new webpack.optimize.OccurenceOrderPlugin(),
        ],
        resolve: {
          extensions: ['', '.js', '.jsx']
        },
        watch:true,
        module: {
          loaders: [{
            test: /\.jsx?$|react\.js/,
            loaders: ['react-hot', 'jsx'],
            include: path.join(__dirname, 'assets')
          }]
        }
    };

} else {

    webpackConfig = {

        entry: './assets/react/indexView.jsx',
        
        output: {
          path: path.join(__dirname, '.tmp/public'),
          filename: 'bundle.js',
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compressor: {
                    screw_ie8: true,
                    warnings: false
                }
            }),
            new webpack.optimize.DedupePlugin(),
        ],
        resolve: {
          extensions: ['', '.js', '.jsx']
        },
        module: {
          loaders: [{
            test: /\.jsx?$|react\.js/,
            loaders: ['jsx'],
            include: path.join(__dirname, 'assets')
          }]
        }
    };
}


module.exports = webpackConfig;
