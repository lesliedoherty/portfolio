import ProjectItems from '@/views/partials/project-items/ProjectItems'

export default {
  name: 'landing',
  components: {
    'project-items': ProjectItems
  },
  data () {
    return {
      projects: this.$root.getItems()
    }
  }
}
