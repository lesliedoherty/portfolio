export default {
  name: 'tableau',
  components: {
  },
  data: () => ({
    msg: 'Hello Tableau!',
    vizDiv: 'vizMe'
  }),
  methods: {
    initViz: function () {
      var containerDiv = document.getElementById(this.vizDiv)
      var url = 'https://public.tableau.com/views/Technologies_0/Sheet1?:embed=y&:display_count=yes&publish=yes'
      var viz = new tableau.Viz(containerDiv, url)
    }
  },
  created: function () {
    // Todo revisit later and find answer to vue / table canvas stuff
    //this.initViz()
  }
}

