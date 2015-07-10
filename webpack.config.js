module.exports = {
    
    entry: './assets/react/indexView.jsx',

    output: {
        filename: './.tmp/public/react/bundle.js' /* default */
    },

    module: {
        loaders: [ {   test: /\.jsx$/, loader: 'jsx-loader', } ]
    },

    //externals: {
        ////don't bundle the 'react' npm package with our bundle.js
        ////but get it from a global 'React' variable
        //'react': 'React'
    //},

    resolve: {
        extensions: ['', '.js', '.jsx']
    }

};
