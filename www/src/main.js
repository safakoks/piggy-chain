import Vue from 'vue'
import App from './App.vue'
import MainService from "./services/MainService";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

MainService.createPiggyChain().then((PiggyChain)=>{
  Vue.prototype.PiggyChain = PiggyChain
  Vue.config.productionTip = false
  new Vue({
    render: h => h(App),
  }).$mount('#app')
})


