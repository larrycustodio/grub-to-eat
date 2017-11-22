const path = require('path');

module.exports = [
  {
    name: 'js',
    entry: {
      main: ['./src/index']
    },
    context: path.join(__dirname, '/src'),
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
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: ['babel-loader']
        },
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]'
        }
      ]
    }
  },
  {
    name: 'scss',
    entry: {
      styles: ['./src/scss/main.scss']
    },
    context: path.join(__dirname, '/src/scss'),
    output: {
      filename: 'main.css',
      path: path.join(__dirname, '/dist/css')
    },
    module: {
      test: /\.scss$/,
      use: { loaders: ['style', 'css', 'sass'] }
    }
  }
];
