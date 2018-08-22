module.exports = {
  // 默认情况下，生成的静态资源文件名中包含了 hash 以便更好的控制缓存
  // 文件名哈希：true-开启（默认）、false-关闭
  filenameHashing: false,
  // 生产环境的 source map：true-添加（默认）、false-去掉
  productionSourceMap: false,
  configureWebpack: {
    // 更改入口文件
    // entry: './src/lib/index.js'
  },
  css: {
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中
    // 默认：生产环境-true、开发环境-false
    extract: false
  }
}