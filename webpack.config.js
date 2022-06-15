const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: path.join(__dirname, 'src', 'index.ts'), // 单文件入口
  output: {
    filename: 'bundle.js',  // 输出文件名
    path: path.join(__dirname, 'dist')  // 输出目录
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [{
          loader: 'ts-loader'
        }],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 8881,
    host: '127.0.0.1',
    open:true,
    hot:true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        filename:'index.html',
        template:'./src/index.html'
    })
  ]
}