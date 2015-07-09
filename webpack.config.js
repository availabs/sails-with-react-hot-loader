module.exports = {
    
    entry: './assets/react/indexView.jsx',

    output: {
        filename: 'bundle.js' /* default */
    },

    module: {
        loaders: [ {   test: /\.jsx$/, loader: 'jsx-loader', } ]
    },

    /* Not sure if this is necessary. */
    //externals: {
        ////don't bundle the 'react' npm package with our bundle.js
        ////but get it from a global 'React' variable
        //'react': 'React'
    //},

    resolve: {
        extensions: ['', '.js', '.jsx']
    }

};
