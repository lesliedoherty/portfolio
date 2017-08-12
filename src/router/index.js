import VueRouter from 'vue-router'
import Landing from '@/views/partials/landing/Landing'
import Styles from '@/views/partials/styleguide/Styles'
import Testimonials from '@/views/partials/testimonials/Testimonials'
import Tableau from '@/views/partials/tableau/Tableau'
let router = new VueRouter({
  // mode: 'history',
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
      path: '/testimonials',
      name: 'Testimonials',
      component: Testimonials
    },
    {
      path: '/tableau',
      name: 'Tableau',
      component: Tableau
    }
  ]
})

export default router
