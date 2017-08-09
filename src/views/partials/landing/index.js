import ProjectItems from '@/views/partials/project-item/ProjectItems'
import Contact from '@/components/contact/Contact'
export default {
  name: 'landing',
  components: {
    "project-items": ProjectItems,
    "contact": Contact
  },
  data () {
    return {
      projects: this.$root.getItems()
    }
  }
}