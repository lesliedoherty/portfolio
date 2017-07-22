import VueRouter from 'vue-router'
import Landing from '@/views/partials/landing/Landing'
import Styles from '@/views/partials/styleguide/Styles'

let router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/styleguide',
      name: 'Styles',
      component: Styles
    }
  ]
})

export default router
