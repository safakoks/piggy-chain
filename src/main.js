import App from './App.vue'
import MainService from "./services/MainService";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMaterial from 'vue-material';

import Vue from 'vue'
import router from './router';


Vue.use(VueMaterial)


MainService.createPiggyChain().then((PiggyChain)=>{
  Vue.prototype.PiggyChain = PiggyChain

  Vue.config.productionTip = false
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
})


