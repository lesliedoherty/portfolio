import ProjectItemHeader from '@/components/project-item-header/ProjectItemHeader'
import ProjectItemDescriptionListItem from '@/components/project-item-description-list-item/ProjectItemDescriptionListItem'
import ProjectTestimonial from '@/components/project-testimonial/ProjectTestimonial'
import ProjectTablet from '@/components/project-tablet/ProjectTablet'
import ProjectMacbook from '@/components/project-macbook/ProjectMacbook'

export default {
  name: 'project-item',
  components: {
    "project-item-header": ProjectItemHeader,
    "project-item-description-list-item": ProjectItemDescriptionListItem,
    "project-testimonial": ProjectTestimonial,
    "project-tablet": ProjectTablet,
    "project-macbook": ProjectMacbook
  },
  props: ['source', 'items'],
  data () {
    return {
      projects: this.items
    }
  },
  methods: {
    updateSource: function (source) {
      this.$http.get(source)
        .then(response => {
          this.items = response.data.items;
        });
    }
  },
  created: function () {
    this.updateSource(this.source)
  },
  watch: {
    source: function (val) {
      this.updateSource(val)
    }
  }
}