import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        name: 'Main' ,
        redirect: '/home',
        component: () => import('../views/Main.vue'),
        children: [
            {
                path: '/home',
                component: () => import('../views/home'),
                name: 'home'
            },
            {
                path: '/user',
                name: 'user',
                component: ()=> import('../views/user')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router