/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   VUE ROUTER
-------------------------------------------------------------------------------- */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Pubnew from '../views/Pubnew'
import Account from '../views/Account'
import Admin from '../views/Admin'

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
    {
        name: 'account',
        path: '/account/:id', 
        component: Account,
        props: true
    },
    {
        name: 'admin',
        path: '/admin', 
        component: Admin
    },
]

const router = new VueRouter({
  routes
})

export default router
