import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

let instance = null;
// 创建一个VUE实例
function render(props) {
    instance = new Vue({
      router,
      store: [],//也可以使用vuex进行通信
      render: h => h(App)
    }).$mount('#app') //这里是挂载到自己的HTML中，基座会拿到这个挂在后的HTML，将其插入进去
}

// 如果是独立运行，则直接渲染(默认)
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}
// 如果是乾坤加载，则需要修改路径
if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 导出一个promise
// 子组件的协议
export async function bootstrap(props) {};
export async function mount(props) {
    console.log('通信参数：', props)
    render(props);
};
export async function unmount(props) {
    instance.$destroy();
    // instance.$el.innerHTML = '';
    // instance = null;
    // router = null;
};