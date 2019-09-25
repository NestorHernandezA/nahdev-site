import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import AboutTechnology from './views/AboutTechnology.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home Page - nahdev profile site',
        metaTags: [
          {
            name: 'description',
            content: 'The home page for nahdev(Nestor A Hernandez Development)'
          }
        ]
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'About Page',
        metaTags: [
          {
            name: 'description',
            content: 'Few more details about nestor hernandez'
          }
        ]
      }
    },
    {
      path: '/about-technology',
      name: 'about-technology',
      component: AboutTechnology,
      meta: {
        title: 'About Technology Page',
        metaTags: [
          {
            name: 'description',
            content: 'Details on technology and knowledge'
          }
        ]
      }
    }
  ]
})