import Home from './pages/Home.vue'
import Explore from './pages/Explore.vue'

const routes = [	
    {
      path: '/',
      component: Home,
      name: 'Home'
    },
    {
      path: '/explorar',
      component: Explore,
      name: 'Explorar'
    },
]

export default routes