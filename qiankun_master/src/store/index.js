/*
 * @Author: your name
 * @Date: 2020-09-08 11:26:33
 * @LastEditTime: 2020-09-08 18:20:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankunDemo\qiankun_master\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commonData: {
      parent: '父级控制'
    }
  },
  mutations: {
    setCommonData(state, val) {
      state.commonData = val
    }
  },
  actions: {
  },
  modules: {
  }
})
