const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./clientCommon');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    watchOptions: {
      poll: true
    },
    publicPath: '/',
    contentBase: './src/client',
    inline: true,
    port: 8080, 
    disableHostCheck: true,
    proxy: {
      '**': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure:false
      }
    }
  },
});
