const HtmlWebpackPlugin = require('html-webpack-plugin'); //html
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //清空

/** @typedef {import("webpack/types").WebpackOptionsNormalized WebpackOptions} */

const path = require('path');

const plugins = [
  new HtmlWebpackPlugin({
    template: `${__dirname}/html/index.html`, //源html
    inject: 'body', //注入到哪里
    filename: 'index.html', //输出后的名称
    hash: false, // 不为静态资源生成hash值，因为 output 已经做了 contenthash，这里 作何不做 都一样，因为 contenthash 跟这个 会同步 变， index.hashA.js?hashB 这 hashA,B 分别是 contenthash 和 这里的hash 影响的

    minify: {
      caseSensitive: false, //是否大小写敏感
      collapseBooleanAttributes: true, //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled
      collapseWhitespace: true, //是否去除空格
    },
  }),

  new CleanWebpackPlugin({
    root: path.resolve(__dirname, '../dist'),
  }),
];

/**
 * 导出的 文件
 * @param {*} env
 * @param {*} argv
 * @returns {WebpackOptions} options object 写上这个 WebpackOptions 是为了让 vscode 能读取 webpack 的类型文件，给予帮助提示
 */
module.exports = (a, { mode }) => {
  console.log(mode);
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, `./dist/${mode}`),
      chunkFilename: '[name][contenthash:4].js', // chunkFilename 应该采用 contenthash 因为这个 chunk 往往是指 拆分出来的 多个包，如果使用的是「hash」则会导致 所有的 chunk的hash 同步变动
      filename: '[name].[contenthash:4].js',
    }, //出口路径
    plugins,
  };
};
