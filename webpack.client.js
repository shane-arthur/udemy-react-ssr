const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    devtool: 'cheap-eval-source-map',
    // tell webpack the root directory of our application
    entry: './src/client/client.js',

    // tell webpack where to put the generated output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }   
}

module.exports = merge(baseConfig, config);