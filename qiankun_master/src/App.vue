<!--
 * @Author: your name
 * @Date: 2020-09-04 15:48:53
 * @LastEditTime: 2020-09-08 18:19:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankunDemo\qiankun_master\src\App.vue
-->
<template>
  <div id="root">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/one">son-one</router-link> |
      <router-link to="/one/about_one">son-one-about</router-link> |
      <router-link to="/two">son-two</router-link>
    </div>
    <div>
      <h3>父级公共资源数据：{{commonData.parent}}</h3>
    </div>
    <router-view />
    <div v-if="loading"
         class="loading">loading</div>
    <div class="appContainer"
         v-html="content">content</div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    },
  },
  computed: {
    commonData() {
      return this.$store.state.commonData;
    }
  },
}
</script>

<style>
#root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
