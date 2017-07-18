import VueRouter from 'vue-router'
import Hello from '@/views/partials/Hello'
import Styles from '@/views/Styles'

let router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/styleguide',
      name: 'Styles',
      component: Styles
    }
  ]
})

export default router
