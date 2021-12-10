/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE ROUTER
-------------------------------------------------------------------------------- */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Pubnew from '../views/Pubnew'

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
    {
        name: 'pubnew',
        path: '/home/pubnew', 
        component: Pubnew
    },
]

const router = new VueRouter({
  routes
})

export default router
