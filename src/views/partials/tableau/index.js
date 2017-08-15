export default {
  name: 'tableau',
  components: {},
  data: () => ({
    msg: 'Hello Tableau!',
    items: [],
    errors: []
  }),

  created() {
    const url = `https://www.tableau.com/data/node/customer_story?items_per_page=3&callback=callOnMe`
    this.$http.jsonp(url)
    .then(response => {
      response.body.forEach(item => {
        this.items.push(item)
      })
    })
    .catch(e => {
      this.errors.push(e)
    })
  }

}

