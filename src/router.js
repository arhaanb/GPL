import Home from './views/Home.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/About.vue'),
  },
  {
    path: '/fixtures',
    name: 'fixtures',
    component: () => import('./views/fixtures.vue'),
  },
  {
    path: '/rankings',
    name: 'rankings',
    component: () => import('./views/rankings.vue'),
  },
  {
    path: '/teams',
    name: 'teams',
    component: () => import('./views/teams.vue'),
  },
]
