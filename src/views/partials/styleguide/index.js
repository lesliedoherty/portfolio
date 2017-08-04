import ProjectItem from '@/views/partials/project-item/ProjectItem'
import Grid from '@/components/grid/Grid'
import Hero from '@/components/hero/Hero'
import ProjectTablet from '@/components/project-tablet/ProjectTablet'
import ProjectMacbook from '@/components/project-macbook/ProjectMacbook'
import Contact from '@/components/contact/Contact'
import SelectSource from '@/components/select-source/SelectSource'
export default {
  name: 'styles',
  components: {
    "project-item": ProjectItem,
    "grid": Grid,
    "hero": Hero,
    "project-tablet": ProjectTablet,
    "project-macbook": ProjectMacbook,
    "contact": Contact,
    "select-source": SelectSource
  },
  data () {
    return {
      msg: 'Styles and Components',
      heroWrapperClass: '',
      sources: this.$root.$data.sources,
      source: '',
      items: []
    }
  },

  methods: {
    sourceChanged: function (source, items) {
      this.source = source
      this.items = items
    }
  },
  created: function () {
    this.source = this.sources[0].path
    this.$http.get(this.source)
      .then(response => {
        this.items = response.data.items;
      });
  }
}