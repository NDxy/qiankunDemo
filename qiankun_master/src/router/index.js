/*
 * @Author: your name
 * @Date: 2020-09-04 17:05:55
 * @LastEditTime: 2020-09-04 18:09:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \qiankunDemo\qiankun_master\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
