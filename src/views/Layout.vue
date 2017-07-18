<template>
  <section>

    <v-toolbar></v-toolbar>
    <main role="main" aria-labelledby="Label" class="main">
     <v-container>
       <router-view></router-view>
     </v-container>
   </main>
   <v-footer></v-footer>
    </main>

  </section>
</template>

<script>
  import AppFooter from './partials/AppFooter.vue'
  import AppNav from './partials/AppNav.vue'

  export default {
    name: 'app',
    components: {
      'app-footer': AppFooter,
      'app-navigation': AppNav
    }
  }
</script>

<style lang="stylus">
  @import './../stylus/main.styl';
</style>
