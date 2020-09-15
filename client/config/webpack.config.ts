const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../public/index.html'),
})
const miniCssExtractPlugin = new MiniCssExtractPlugin()

/**
 * @type { import('webpack').Configuration}
 */
const config = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.tsx'),
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ],
  },
  plugins: [htmlWebpackPlugin, miniCssExtractPlugin],

  devServer: {
    stats: 'errors-only',
    overlay: true,
    host: 'localhost',
    port: '5200',
    open: true,
    quiet: false,
    hot: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
}

module.exports = config
