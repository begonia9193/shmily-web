const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../public/index.html'),
})

/**
 * @type { import('webpack').Configuration}
 */
const config = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.js'),
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path]-[local]-[hash:5]',
              },
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [htmlWebpackPlugin],

  resolve: {
    extensions: ['.mjs', '.js', '.jsx'],
  },
  devServer: {
    stats: 'errors-only',
    overlay: true,
    host: 'localhost',
    port: '5200',
    open: true,
    quiet: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
}

module.exports = config
