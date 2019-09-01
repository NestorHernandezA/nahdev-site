import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Timelines from './views/Timelines.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/timelines',
      name: 'timelines',
      component: Timelines
    }
  ]
})