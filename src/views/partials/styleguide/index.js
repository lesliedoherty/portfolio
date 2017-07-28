import ProjectItem from '@/views/partials/project-item/ProjectItem'
import Grid from '@/components/grid/Grid'
import Hero from '@/components/hero/Hero'
import ProjectIPad from '@/components/project-ipad/ProjectIPad'
import ProjectMacbook from '@/components/project-macbook/ProjectMacbook'
export default {
  name: 'styles',
  components: {
    "project-item": ProjectItem,
    "grid": Grid,
    "hero": Hero,
    "project-ipad": ProjectIPad,
    "project-macbook": ProjectMacbook
  },
  data () {
    return {
      msg: 'Styles and Components'
    }
  }
}