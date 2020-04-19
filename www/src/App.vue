<template>
  <div id="app">
    <title>Piggy Chain</title>
    <img alt="Vue logo" src="./assets/piggy.svg">
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'


  // Pages
  import HomeView from './views/Home.vue'
  import MoneyView from './views/Money.vue'
  import UserView from './views/User.vue'

  Vue.use(VueRouter)

  const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/', name: 'home', component: HomeView },
      { path: '/user', name: 'user', component: UserView },
      { path: '/money', name: 'money', component: MoneyView },
    ]
  })


export default {
  router,
  name: 'App',
  data : ()=>{
    return {

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
  margin-top: 60px;
}
</style>
