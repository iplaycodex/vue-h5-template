本项目是一个vue-h5的模板项目,已经配好了一些移动端开发的依赖和一些loader.方便快速开发

***
### 如何使用
vue init wawsc5354524/vue-h5-template project-name

根据需求配置即可,然后进入下面的流程:

### 安装依赖
npm install or cnpm install (推荐使用yarn安装,更快)

### run in dev
npm run dev

### build project
npm run build

***
目前已经集成的类库或插件如下所示:

- `vuex`
    - 处理数据
- `vue-router`
    - 路由
- `px2rem loader`
    - px2rem
- `fastclick`
    - 解决移动端300ms延迟
- `less loader`
    - CSS预编译暂默认使用Less
- `axios`
    - 封装好了 axios Http 请求库
- `qs`
    - 处理请求的数据
- `moment`
    - 处理时间
- `babel-polyfill`
    - 补丁
- `babel-plugin-import`
    - 组件懒加载

