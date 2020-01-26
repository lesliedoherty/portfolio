import ProjectItem from '@/views/partials/project-item/ProjectItem'

export default {
  name: 'project-items',
  components: {
    "project-item": ProjectItem
  },
  props: ['projects']
}
