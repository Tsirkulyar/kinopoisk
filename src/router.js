import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'GeneralPage',
        component: () => import('./components/pages/GeneralPage.vue'),
    },
    {
        path: '/movie/:id',
        name: 'MoviePage',
        component: () => import('./components/pages/MoviePage.vue'),
    },
    {
        path: '/profile',
        name: 'UserPage',
        component: () => import('./components/pages/UserPage.vue'),
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router