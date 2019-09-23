# install dependencies
npm install or cnpm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
#其他的一些配置项

#1.安装babel-plugin-import,实现组件懒加载
npm install babel-plugin-import --save-dev

#在 .babelrc 或 babel-loader 中添加插件配置 // 注意：webpack 1 无需设置 libraryDirectory。
{
  "plugins": [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

#参考网站:https://www.youzanyun.com/zanui/vant#/zh-CN/quickstart

#2.安装 less loader
终端执行命令:cnpm/npm install less --save
终端执行命令:cnpm/npm install less-loader --save
然后修改webpack.base.conf.js 中的module.rules
{
    test: /\.less$/,
    loader: 'less-loader' // compiles Less to CSS
},
即可

#3.安装 px2rem loader
终端执行命令:cnpm/npm install postcss-px2rem --save 和 cnpm/npm install px2rem-loader --save 配置方法如下所示:
build目录下vue-loader.conf.js中，做如下修改：
transformToRequire:{
    postcss:[require('postcss-px2rem')({'remUnit':75,'baseDpr':2})] //设计稿尺寸/10
}

在不需要进行转换的地方如下配置:
.selector {
    width: 150px;
    height: 64px; /*px*/    //保持px单位
    font-size: 28px; /*px*/
    border: 1px solid #ddd; /*no*/ //边框1px不变
}

更加详细的配置请参考:https://www.cnblogs.com/lulianlian/p/7656184.html

#4.安装fastclick 目的:处理移动端click事件300毫秒延迟
终端执行命令:cnpm/npm install fastclick --save
然后在main.js中导入即可!
import fastClick from 'fastclick';

fastClick.attach(document.body)

#5.安装 vuex
终端执行命令:cnpm/npm install vuex --save
然后在main.js 中
#import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,    //添加即可
  components: { App },
  template: '<App/>'
})

#6.安装axios http请求库
终端执行命令:cnpm/npm install axios --save
在需要http请求的页面 import axios from 'axios' 即可

#7.安装 babel-polyfill 解决低版本浏览器的兼容
终端执行命令:cnpm/npm install babel-polyfill --save

#8.安装qs 将axios发送的数据格式转换为form-data格式
终端执行命令:cnpm/npm install qs --save
使用方法也很简单,看下面的图示:
import qs from 'qs'

// 将请求数据转换为form-data格式
// 这里不用qs，用FormData也可以，不赘述
var data = qs.stringify({
  currentPage: "0",
  pageSize: "10",
  type: "1",
});

axios.post('/url', data)
.then(function (response) {
    //
})

#9.添加moment.js
终端执行命令:cnpm/npm install moment --save 即可

#10.添加vue-meta
作用:优雅的修改HTML的头部标签

使用方法很简单,在需要修改的页面中添加即可:
metaInfo() {
  return {
    title: this.title
  };
}