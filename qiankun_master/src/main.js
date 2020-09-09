/*
 * @Author: your name
 * @Date: 2020-09-04 15:48:53
 * @LastEditTime: 2020-09-08 16:54:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankunDemo\qiankun_master\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  registerMicroApps, // 注册子应用
  runAfterFirstMounted, // 第一个子应用装载完毕
  setDefaultMountApp, // 设置默认装载子应用
  start, // 启动
} from 'qiankun';
import store from './store'

Vue.config.productionTip = false
/**
 * 渲染函数
 * appContent 子应用html
 * loading 如果主应用设置loading效果，可不要
 */
let app = null;
function render({ appContent, loading } = {}) {
  if (!app) {
    app = new Vue({
      el: '#container',
      router,
      data() {
        return {
          content: appContent,
          loading,
        };
      },
      store,
      render(h) {
        return h(App, {
          props: {
            content: this.content,
            loading: this.loading,
          },
        });
      }
    });
  } else {
    app.content = appContent;
    app.loading = loading;
  }
}

/**
 * 路由监听
 * @param {*} routerPrefix 前缀
 */
function genActiveRule(routerPrefix) {
  return (location) => location.pathname.startsWith(routerPrefix);
}

// 调用渲染主应用
render();

// 注册子应用
registerMicroApps(
  [
    {
      name: 'sonOne',
      entry: '//localhost:8089',
      render,
      activeRule: genActiveRule('/one'),
      props: { data: { store, router } }
    }
    ,
    {
      name: 'son-two',
      entry: '//localhost:8090',
      render,
      activeRule: genActiveRule('/two'),
    }
  ],
  {
    beforeLoad: [
      (app) => {
        console.log('before load', app);
      },
    ], // 挂载前回调
    beforeMount: [
      (app) => {
        console.log('before mount', app);
      },
    ], // 挂载后回调
    afterUnmount: [
      (app) => {
        console.log('after unload', app);
      },
    ], // 卸载后回调
  }
);

// 设置默认子应用,参数与注册子应用时genActiveRule("/one")函数内的参数一致
// setDefaultMountApp('/one');

// 第一个子应用加载完毕回调
runAfterFirstMounted((app) => {
  console.log(app)
});

// 启动微服务
start({ prefetch: true });

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
