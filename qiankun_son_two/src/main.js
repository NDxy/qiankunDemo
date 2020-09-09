/*
 * @Author: your name
 * @Date: 2020-09-04 16:22:07
 * @LastEditTime: 2020-09-07 17:36:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankunDemo\qiankun_son_two\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
let instance = null;
const __qiankun__ = window.__POWERED_BY_QIANKUN__;
function render() {
  instance = new Vue({
    render: h => h(App)
  }).$mount('#sonTwo');
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
  render()
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载子应用的应用实例
 */
export async function unmount() {
  instance.$destroy();
  instance = null;
}
// new Vue({
//   render: h => h(App),
// }).$mount('#sonTwo')
