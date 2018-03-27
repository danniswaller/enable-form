import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.use(ElementUI);
Vue.prototype.$http = axios
Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
    if (to.meta.requireLogin) {
        if (!isEmptyObj(store.state.user)) {
            next();

        } else {
            next({
                path: '/login'

        })
        }
    } else {
        next();
    }
})

let isEmptyObj = function (obj) {
    for (var key in obj) {
        return false;
    }
    return true;


}
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');