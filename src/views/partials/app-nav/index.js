import Hero from '@/components/hero/Hero'

export default {
  name: 'appNav',
  props: ['heroWrapperClass'],
  components: {
    'hero': Hero
  }
}