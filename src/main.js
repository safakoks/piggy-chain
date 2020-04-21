/*
Copyright 2020 - Şafak Öksüzer, Berkay Korkmaz

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import App from './App.vue'
import MainService from "./services/MainService";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMaterial from 'vue-material';

import Vue from 'vue'
import router from './router';

Vue.use(VueMaterial);

MainService.createPiggyChain().then(({PiggyChain, error})=>{

  Vue.prototype.Web3Error = error;
  Vue.prototype.PiggyChain = PiggyChain

  Vue.config.productionTip = false
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
})


