import VueRouter from 'vue-router'
import Landing from '@/views/partials/landing/Landing'
import Styles from '@/views/partials/styleguide/Styles'
import Sandbox from '@/views/partials/sandbox/Sandbox'

let router = new VueRouter({
  mode: 'history',
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
    },
    {
      path: '/sandbox',
      name: 'Sandbox',
      component: Sandbox
    }
  ]
})

export default router
