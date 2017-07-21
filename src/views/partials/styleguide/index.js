import ProjectItem from '@/components/project-item/ProjectItem'
import Grid from '@/components/grid/Grid'
export default {
  name: 'styles',
  components: {
    "project-item": ProjectItem,
    "grid": Grid
  },
  data () {
    return {
      msg: 'Styles and Components',
    }
  }
}