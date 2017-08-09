import ProjectItems from '@/views/partials/project-items/ProjectItems'
import Grid from '@/components/grid/Grid'
import Hero from '@/components/hero/Hero'
import ProjectTablet from '@/components/project-tablet/ProjectTablet'
import ProjectMacbook from '@/components/project-macbook/ProjectMacbook'
import Contact from '@/components/contact/Contact'
import SelectSource from '@/components/select-source/SelectSource'
import Colors from '@/components/colors/Colors'
export default {
  name: 'styles',
  components: {
    "project-items": ProjectItems,
    "grid": Grid,
    "hero": Hero,
    "project-tablet": ProjectTablet,
    "project-macbook": ProjectMacbook,
    "contact": Contact,
    "select-source": SelectSource,
    "colors": Colors
  },
  data () {
    return {
      activeSource: this.$root.getActiveDataSource(),
      msg: 'Styles and Components',
      heroWrapperClass: '',
      projects: this.$root.getItems(),
      sources: this.$root.getAvailableDataSources()
    }
  },

  methods: {
    onSourceChanged: function (key) {
      this.$root.setActiveDataSource(key)
    }
  }
}