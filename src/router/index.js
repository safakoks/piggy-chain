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

