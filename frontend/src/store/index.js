import Vue from 'vue'
import Vuex from 'vuex'
import VueFormulate from '@braid/vue-formulate'

import User from "./user";

Vue.use(Vuex)
Vue.use(VueFormulate)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: User
  }
})
