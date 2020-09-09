<!--
 * @Author: your name
 * @Date: 2020-09-04 15:32:53
 * @LastEditTime: 2020-09-08 18:18:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankunDemo\qiankun_son_one\src\App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <span @click="routerChange('/')">Home</span> |
      <span @click="routerChange('/about_one')">About</span> |
      <span @click="routerParent('/about')">parentAbout</span> |
      <span @click="routerParent('/two')">son_two</span>
    </div>
    <div>
      <a href="#"
         @click.stop="setStore">修改父应用公共资源</a>
    </div>
    <router-view />
  </div>
</template>
<script>

export default {
  name: 'sonTwo',
  data() {
    return {

    }
  },
  methods: {
    setStore() {
      this.$root.parentStore.commit('setCommonData', { parent: '子级控制' })
    },
    routerChange(url) {
      this.$router.push(url).catch(err => {
        console.log(err);
      });
    },
    routerParent(url) {
      this.$root.parentRouter.push(url)
    }
  }
}
</script>
<style>
#app {
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
