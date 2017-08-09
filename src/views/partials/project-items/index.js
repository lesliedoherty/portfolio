import ProjectItem from '@/components/project-item-header/ProjectItem'

export default {
  name: 'project-items',
  components: {
    "project-item": ProjectItem
  },
  props: ['projects']
}