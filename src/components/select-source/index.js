export default {
  name: 'select-source',
  data () {
    return {
      sources: this.$root.$data.sources,
      source: '',
      items: []
    }
  },
  methods: {
    sourceChanged: function(e) {
      for (var i=0; i<this.sources.length; i++) {
        if (this.sources[i].id == e.target.value) {
          this.source = this.sources[i].path;
        }
      }
      this.$emit('sourceChanged', this.source);
    }
  }
}