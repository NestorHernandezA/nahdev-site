import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Timelines from './components/Timelines.vue'

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