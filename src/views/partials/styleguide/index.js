import ProjectItem from '@/components/project-item/ProjectItem'

export default {
  name: 'styles',
  data () {
    return {
      msg: 'Styles and Components',
      items: [
        {header: 'Testimonials'},
        {
          avatar: '/static/docs/ex1.jpeg',
          title: '12th Dr',
          subtitle: "It's all right up to the eyebrows, then it just goes haywire! Look at the eyebrows. These are attack eyebrows. You can take bottle tops off with these!"
        },
        {divider: true, inset: true},
        {
          avatar: '/static/docs/ex2.jpeg',
          title: '10th Dr',
          subtitle: "People assume that time is a strict progression of cause to effect, but actually from a non-linear, non-subjective viewpoint, it’s more like a big ball of wibbly-wobbly, timey-wimey stuff.”"
        },
        {divider: true, inset: true},
        {
          avatar: '/static/docs/ex3.jpeg',
          title: '11th Dr',
          subtitle: "The universe is big, it's vast and complicated, and ridiculous. And sometimes, very rarely, impossible things just happen and we call them miracles."
        }
      ]
    }
  }
}