import Vue from 'vue'
import Vuex from 'vuex'
import VueFormulate from '@braid/vue-formulate'

import User from "./modules/user";

Vue.use(Vuex)
Vue.use(VueFormulate)

export default new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        user: User
    }
})
