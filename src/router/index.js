import VueRouter from 'vue-router'
import Hello from '@/components/Hello'
import Styles from '@/components/Styles'

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
