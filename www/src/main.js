import Vue from 'vue'
import App from './App.vue'
import MainService from "./services/MainService";
MainService.createPiggyChain().then((PiggyChain)=>{
  window.PiggyChain = PiggyChain;
  Vue.config.productionTip = false
  new Vue({
    render: h => h(App),
  }).$mount('#app')
})


