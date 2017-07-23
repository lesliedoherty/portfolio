<template>
  <v-app id="app" standalone>
    <v-toolbar fixed class="secondary" dark>
      <v-toolbar-title>Portfolio</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <div class="title">Content will go here</div>
           <hello></hello>
        <!--v-router-->
      </v-container>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        mini: false,
        right: null
      }
    }
  }
</script>