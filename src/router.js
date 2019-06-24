import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  },
  {
    path: '/dev',
    name: 'dev',
    component: () => import('./views/Dev.vue'),
  },
  {
    path: '/monsters',
    name: 'monsters',
    component: () => import('./views/Monsters.vue'),
  },
  {
    path: '/maps',
    name: 'maps',
    component: () => import('./views/Maps.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('./views/Settings.vue'),
  },
  ],
});
