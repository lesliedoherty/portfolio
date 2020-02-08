import ProjectItemDescriptionItem from '@/components/project-item-description-item/ProjectItemDescriptionItem'
import ProjectTestimonial from '@/components/project-testimonial/ProjectTestimonial'
import ProjectTablet from '@/components/project-tablet/ProjectTablet'
import ProjectMacbook from '@/components/project-macbook/ProjectMacbook'

export default {
  name: 'project-item',
  components: {
    "project-item-description-item": ProjectItemDescriptionItem,
    "project-testimonial": ProjectTestimonial,
    "project-tablet": ProjectTablet,
    "project-macbook": ProjectMacbook
  },
  props: ['project']
}
