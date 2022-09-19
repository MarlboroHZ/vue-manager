import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter);


const routers = [
    {
        path: '/',
        name: 's-Home',
        component: () => import('../views/Home.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routers
})

export default router