export default {
  name: 'select-header',
  props: ['activeClass', 'classes'],
  methods: {
    headerChanged: function(e) {
      this.$emit('header-changed', e.target.value)
    }
  }
}