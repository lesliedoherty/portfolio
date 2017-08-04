// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import './bootMeUp'
import router from './router/index'
import LayoutView from './views/Layout.vue'
var sources = [
  {
    'name': 'Layout Example Data',
    'id': 'one',
    'path': '/static/data/examples.json'
  },
  {
    'name': 'Project Data',
    'id': 'two',
    'path': '/static/data/projects.json'
  }
]
/* eslint-disable no-new */
new window.Portfolio.Vue({
  el: '#app',
  router,
  template: '<layout-view></layout-view>',
  components: {
    'layout-view': LayoutView
  },
  data: {
    sources: sources
  }
})
