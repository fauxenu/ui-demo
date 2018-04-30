const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// paths
const distPath = path.resolve(process.cwd(), 'build');
const publicPath = path.resolve(process.cwd(), 'public');
const srcPath = path.resolve(process.cwd(), 'src');

module.exports = {
  // bundles app and vendor code in separate bundles
  entry: `${srcPath}/index.jsx`,
  output: {
    path: distPath,
    publicPath: '/',
    filename: 'index_bundle.js',
  },

  module: {
    rules: [
      // linting
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        include: [srcPath],
        exclude: [/node_modules/, /public/],
        use: {
          loader: 'eslint-loader',
        },
      },

      // javascript transform
      {
        test: /\.jsx?$/,
        include: [srcPath],
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        },
      },

      // static asset loader
      {
        test: /\.(jpg|jpeg|gif|png|ico|ttf|eot|dtd|svg|woff(2)?)(\?[a-z0-9=.]+)?$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/',
        },
      },

      // CSS extraction
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
        }),
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css', '.html', '.svg', '.png', '.jpeg'],
    alias: {
      assets: `${srcPath}/assets`,
      styles: `${srcPath}/styles`,
      components: `${srcPath}/components`,
      pages: `${srcPath}/pages`,
    },
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      title: 'UI Demo',
      template: `${publicPath}/index.html`,
      favicon: `${publicPath}/favicon.ico`,
    }),
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  devtool: 'source-map',
};
