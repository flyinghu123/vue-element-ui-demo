const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: './',
  devServer: {
    // can be overwritten by process.env.HOST
    // host: '0.0.0.0',
    // port: 8080,
    open: true
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'));
    // 是vue-cli能加载ico图片
    config.module
      .rule('image')
      .test(/\.ico$/)
      .use('url-loader')
      .loader('url-loader');
  },
  productionSourceMap: false,
};
