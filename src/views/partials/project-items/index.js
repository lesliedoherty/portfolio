import ProjectItem from '@/views/partials/project-item/ProjectItem'
import AnchorJS from 'anchor-js'

var project_anchors = new AnchorJS({
  placement: 'left',
  icon: '#',
  visible: 'always'
})
export default {
  name: 'project-items',
  components: {
    "project-item": ProjectItem
  },
  props: ['projects'],
  methods: {
    anchorsInit() {
      return project_anchors
    },
  },
  mounted () {
    this.anchorsInit()
    project_anchors.add('.project_anchor')
  }
}
