import Home from './views/Home.vue'
import Matches from './views/matches.vue'
import Rankings from './views/rankings.vue'
import Teams from './views/teams.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/matches',
    name: 'Matches',
    component: Matches,
  },
  {
    path: '/rankings',
    name: 'rankings',
    component: Rankings,
  },
  {
    path: '/teams',
    name: 'teams',
    component: Teams,
  },
]
