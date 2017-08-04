import ProjectItem from '@/views/partials/project-item/ProjectItem'
import Contact from '@/components/contact/Contact'
export default {
  name: 'landing',
  components: {
    "project-item": ProjectItem,
    "contact": Contact
  },
  data () {
    return {
      sources: this.$root.$data.sources,
      source: '',
      items: []
    }
  },
created: function () {
  this.source = this.sources[1].path
  this.$http.get(this.source)
    .then(response => {
      this.items = response.data.items;
    });
  }
}