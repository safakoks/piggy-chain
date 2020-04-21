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

import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages
import HomeView from '../views/Home.vue'
import MoneyView from '../views/Money.vue'
import UserView from '../views/User.vue'

Vue.use(VueRouter);
const routes =  [
        {     path: '/',
            meta: {title: 'Home'},
            name: 'home',
            component: HomeView },
        {     path: '/user',
            name: 'user',
            meta: {title: 'User'},
            component: UserView },
        {     path: '/money',
            name: 'money',
            meta: {title: 'Money'},
            component: MoneyView },
    ]


const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = 'Piggy Chain - ' + to.meta.title
    next()
})

export default router;

