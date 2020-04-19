<template>
  <div id="app">
    <title>Piggy Chain</title>
    <img alt="Vue logo" src="./assets/piggy.svg">
    <AddMoneyComp></AddMoneyComp>
    <SetUserComp></SetUserComp>
  </div>
</template>

<script>
  import AddMoneyComp from './components/AddMoney.vue'
  import SetUserComp from './components/SetUser.vue'

export default {
  name: 'App',
  components: {
    AddMoneyComp,
    SetUserComp
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
