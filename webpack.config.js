/** @typedef {import("webpack/types").WebpackOptionsNormalized WebpackOptions} */

const path = require('path');

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
    output: { path: path.resolve(__dirname, `./dist/${mode}`) }, // //出口路径
  };
};
