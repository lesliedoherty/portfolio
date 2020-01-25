// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import './bootMeUp'
import router from './router/index'
import LayoutView from './views/Layout.vue'
var sources = {
  'examples': {
    'name': 'Layout Example Data',
    'id': 'one',
    'path': '/static/data/examples.json'
  },
  'projects': {
    'name': 'Project Data',
    'id': 'two',
    'path': '/static/data/projects.json'
  }
}
/* eslint-disable no-new */
new window.Portfolio.Vue({
  el: '#app',
  router,
  template: '<layout-view></layout-view>',
  components: {
    'layout-view': LayoutView
  },
  data: {
    activeSource: '',
    sources: sources,
    items: []
  },
  methods: {
    getAvailableDataSources () {
      return this.sources
    },
    getItems () {
      return this.items
    },
    getActiveDataSource () {
      return this.activeSource
    },
    setActiveDataSource (key) {
      this.activeSource = key

      this.$http.get(this.sources[this.activeSource].path).then(response => {
        /**
         * TRICKY:
         * We can't just assign an empty array to the property, as that break the
         * data binding.
         *
         * @see https://vuejs.org/v2/guide/list.html#Array-Change-Detection
         */

        this.items.splice(0)

        response.data.items.forEach(item => {
          this.items.push(item)
        })
      })
    }
  },
  created: function () {
    this.setActiveDataSource('projects')
  },
  mounted() {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
})
