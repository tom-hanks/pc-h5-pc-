<template>
  <div id="app">
    <!-- 头像信息 -->
    <personal></personal>
    <!-- 全局公共左侧导航 -->
    <left-menu></left-menu>
    <router-view/>
  </div>
</template>

<script>
// import leftMenu from './components/nav-left.vue'
// import personal from './components/personal.vue'
const leftMenu = () => import ( /* webpackChunkName:"leftMenu" */ './components/nav-left.vue');
const personal = () => import ( /* webpackChunkName:"personal" */ './components/personal.vue');


export default {
  name: 'App',
   components: {
    leftMenu,
    personal
  },
  data(){
    return{
      logo: require('./assets/logo.png')
    }
  }
}
</script>

<style scoped>

</style>
