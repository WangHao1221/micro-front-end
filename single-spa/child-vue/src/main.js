import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

const appOptions = {
    el: '#vue', //父应用中id为vue的标签中
    router,
    render: h => h(App)
}
const vueLifeCycle = singleSpaVue({
    Vue,
    appOptions
})

// 如果是父引用引用我，修改子应用访问的路径（相对于子应用，否则默认相对于父应用设置s）
if (window.singleSpaNavigate) {
    __webpack_public_path__ = 'http://localhost:10000/'
}
if (!window.singleSpaNavigate) {
    // 子系统也可以独立运行
    delete appOptions.el
    new Vue(appOptions).$mount('#app')
}

// 协议接入，定好协议，父应用会调用这些方法
export const bootstrap = vueLifeCycle.bootstrap
export const mount = vueLifeCycle.mount
export const unmount = vueLifeCycle.unmount

/*@ 思路：
 ** 父应用加载子应用，将子应用打包成一个个lib，供父应用使用(新增vue.config.js)
 */