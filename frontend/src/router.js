import Vue from 'vue'
import Router from 'vue-router'

import  login from './views/login/login.vue'
import  home from './views/home/home.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            meta: {
                requireLogin: true
            }

        },
        {
            path: '/',
            name: 'head',
            component: login


        }
    ]
})


