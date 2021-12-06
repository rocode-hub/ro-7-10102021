/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE ROUTER
-------------------------------------------------------------------------------- */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        name: 'login',
        path: '/', 
        component: Login
    },
    {
        name: 'home',
        path: '/home', 
        component: Home
    },
]

const router = new VueRouter({
  routes
})

export default router