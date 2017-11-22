const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    context: path.join(__dirname, '/src'),
    
    name: 'js',
  
    entry: {
      main: ['./js/index']
    },
  
    devtool: 'source-maps',
  
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, '/dist')
    },

    resolve: {
      alias: {
        react: path.join(__dirname, 'node_modules', 'react')
      },
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        // See .babelrc for specified react compiler 
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: ['babel-loader']
        },
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]'
        },
        // Adds sass loaders for scss file imported on index.jsx
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css-loader!sass-loader')
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('css/main.css', {
        allChunks: true
      })
    ]

  }
];
