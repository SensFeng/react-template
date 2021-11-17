const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  cache: false,
  devtool: 'eval-cheap-module-source-map',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    port: 8080,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            // presets: ['@babel/preset-env'],
            plugins: [
              require.resolve('react-refresh/babel')
              // ['@babel/plugin-proposal-decorators', {legacy: true }],
              // ['@babel/plugin-proposal-class-properties', { loose: true }],
            ]
          }
        }
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        type: 'asset',
        include: /src/,
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new ReactRefreshPlugin(), 
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}