/*
 * @Author: your name
 * @Date: 2020-09-04 15:32:53
 * @LastEditTime: 2020-09-08 16:56:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankunDemo\qiankun_son_one\src\main.js
 */
import './public-path';
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import routes from './router'

Vue.config.productionTip = false

let instance = null;
let router = null
const __qiankun__ = window.__POWERED_BY_QIANKUN__;
function render({ data } = {}) {
  /**
   * 路由模式：history需要设置路由前缀
   */
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/one' : '/',
    mode: 'history',
    routes
  })

  instance = new Vue({
    router,
    data() {
      return {
        parentRouter: data.router, //获取父路由，以便子应用操作父应用路由跳转
        parentStore: data.store //获取父路由，以便子应用操作父应用路由跳转
      }
    },
    render: h => h(App)
  }).$mount('#sonOne');
}

if (!__qiankun__) {
  render();
}
export async function bootstrap() {
  console.log('react app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log(props);
  render(props)
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载子应用的应用实例
 */
export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}

// __qiankun__ || mount();

// new Vue({
//   render: h => h(App),
// }).$mount('#sonOne')
