import Vue from 'vue'
import App from './App.vue'
import VueFormulate from '@braid/vue-formulate'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueFormulate)


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
