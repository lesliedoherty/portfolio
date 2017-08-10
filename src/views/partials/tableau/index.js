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
      var url = 'https://us-east-1.online.tableau.com/t/portfoliodata/views/tech/Sheet1?:embed=y&:showAppBanner=false&:showShareOptions=true&:display_count=no&:showVizHome=no'
      var viz = new tableau.Viz(containerDiv, url)
    }
  },
  created: function () {
    this.initViz()
  }
}

