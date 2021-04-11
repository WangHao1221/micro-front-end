import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import { registerMicroApps, start } from 'qiankun'
const apps = [
  {
    name: 'vueApp', //应用的名字
    entry: 'http://localhost:10000', //默认会加载这个html 解析里面的js 动态的执行(fetch请求，所以子应用必须支持跨域)
    container: '#vue', //挂载到哪个元素（容器名）
    activeRule: '/vue' //激活规则（激活的路径）
  },
  {
    name: 'reactApp',
    entry: '//localhost:20000', //默认会加载这个html 解析里面的js 动态的执行(fetch请求，所以子应用必须支持跨域)
    container: '#react', //挂载到哪个元素
    activeRule: '/react' //激活规则'
  }
];
registerMicroApps(apps);//注册应用,第二个参数可以配置生命周期函数
start(
  {
    prefetch: false //如果需要点击按钮再调用某个服务，则取消预加载即可
  }
);//启动

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
