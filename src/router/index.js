import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/fixtures',
    name: 'fixtures',

    component: () => import(/* webpackChunkName: "about" */ '../views/fixtures.vue')
  },
  {
    path: '/rankings',
    name: 'rankings',

    component: () => import(/* webpackChunkName: "about" */ '../views/rankings.vue')
  },
  {
    path: '/teams',
    name: 'teams',

    component: () => import(/* webpackChunkName: "about" */ '../views/teams.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
