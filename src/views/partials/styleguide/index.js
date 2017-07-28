import ProjectItem from '@/views/partials/project-item/ProjectItem'
import Grid from '@/components/grid/Grid'
import Hero from '@/components/hero/Hero'
import ProjectTablet from '@/components/project-tablet/ProjectTablet'
import ProjectMacbook from '@/components/project-macbook/ProjectMacbook'
//import Contact from '@/components/contact/Contact'
export default {
  name: 'styles',
  components: {
    "project-item": ProjectItem,
    "grid": Grid,
    "hero": Hero,
    "project-tablet": ProjectTablet,
    "project-macbook": ProjectMacbook
    //"contact": Contact
  },
  data () {
    return {
      msg: 'Styles and Components'
    }
  }
}