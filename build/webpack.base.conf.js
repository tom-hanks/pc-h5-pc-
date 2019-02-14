'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const SpritesmithPlugin = require('webpack-spritesmith')
// 为了jqeury，第一处引入webpack
const webpack = require('webpack')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  plugins: [
    new SpritesmithPlugin({
      //设置源icons,即icon的路径，必选项
      src: {
        cwd: path.resolve(__dirname, '../src/assets/images/icons'),
        glob: '*.png'
      },
      //设置导出的sprite图及对应的样式文件，必选项
      target: {
        image: path.resolve(__dirname, '../src/assets/images/sprites/sprite.png'),
        css: path.resolve(__dirname, '../src/assets/images/sprites/sprite.less') //也可以为css, sass文件，需要先安装相关loader
      },
      //设置sprite.png的引用格式
      apiOptions: {
        cssImageRef: './sprite.png' //cssImageRef为必选项
      },
      //配置spritesmith选项，非必选
      spritesmithOptions: {
        algorithm: 'top-down' //设置图标的排列方式
      }
    }),
    //为了jqeury 配置下面的new webpack.ProvidePlugin
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
  })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      //为了jqeury 如果使用NPM安装的jQuery
      'jquery': 'jquery'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
