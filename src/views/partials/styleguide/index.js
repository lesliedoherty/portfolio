import ProjectItem from '@/views/partials/project-item/ProjectItem'
import Grid from '@/components/grid/Grid'
import Hero from '@/components/hero/Hero'
export default {
  name: 'styles',
  components: {
    "project-item": ProjectItem,
    "grid": Grid,
    "hero": Hero
  },
  data () {
    return {
      msg: 'Styles and Components'
    }
  }
}