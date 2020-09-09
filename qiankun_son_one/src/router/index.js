/*
 * @Author: your name
 * @Date: 2020-09-07 17:23:56
 * @LastEditTime: 2020-09-08 15:37:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankunDemo\qiankun_son_one\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
// const __qiankun__ = window.__POWERED_BY_QIANKUN__;

const routes = [
  {
    path: '/',
    name: 'home-one',
    component: Home
  },
  {
    path: '/about_one',
    name: 'about-one',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

export default routes
