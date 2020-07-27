import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('./views/about')
    },
    {
        path: '/dev',
        name: 'dev',
        component: () => import('./views/Dev.vue')
    },
    {
        path: '/monsters',
        name: 'monsters',
        component: () => import('./views/Monsters.vue')
    },
    {
        path: '/maps',
        name: 'maps',
        component: () => import('./views/Maps.vue')
    },
    {
        path: '/encounter',
        name: 'encounter',
        component: () => import('./views/Encounter.vue')
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import('./views/Settings.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
