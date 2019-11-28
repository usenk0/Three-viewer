import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GenerateTree from '../views/GenerateTree.vue'
import DisplayTree from '../views/DisplayTree.vue'
import Profile from '../views/Profile.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/generate-tree',
        name: 'generateTree',
        component: GenerateTree,
        meta: { requiresAuth: true },
    },
    {
        path: '/display-tree',
        name: 'DisplayTree',
        component: DisplayTree,
        meta: { requiresAuth: true },
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: { requiresAuth: true },
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (!to.name) next({ name: 'home' })
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.state.userData) {
            next({
                name: 'home',
            })
        } else {
            next()
        }

    } else {
        next()
    }
});
export default router