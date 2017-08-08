export default {
  name: 'select-source',
  props: ['activeSource', 'sources'],
  methods: {
    sourceChanged: function(e) {
      this.$emit('source-changed', e.target.value)
    }
  }
}