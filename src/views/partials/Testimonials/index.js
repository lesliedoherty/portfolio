import axios from 'axios';
import ProjectTestimonial from '@/components/project-testimonial/ProjectTestimonial'
import $ from 'jquery'

export default {
  name: 'Testimonials',
  components: {
    'project-testimonial': ProjectTestimonial
  },
  data: () => ({
    msg: 'I have had the priveledge to work with incredible people',
    items: [],
    errors: []
  }),

  // Fetches posts when the component is created.
  created() {
    axios.get(`/static/data/projects.json`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.items = response.data.items
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  methods: {

  }
}
