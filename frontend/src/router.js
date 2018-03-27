import Vue from 'vue'
import Router from 'vue-router'

import  login from './views/login/login.vue'
import  home from './views/home/home.vue'
import  proInfo from './components/proInfo.vue'
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
            },
            children: [
                {
                    // 当 /user/:id/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: '/home/proInfo',
                    component: proInfo
                },

            ]

        },
        {
            path: '/',
            name: 'head',
            component: login


        }
    ]
})


