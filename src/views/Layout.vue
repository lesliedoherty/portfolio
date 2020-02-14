<template>
  <div>
    <span class="skip"><a class="skip--anchor" href="#a11y" v-smooth-scroll="{ duration: 1000, offset: -50 }">Skip Navigation</a></span>
    <app-navigation></app-navigation>
    <main role="main" class="content">
      <hero></hero>
      <router-view></router-view>
   </main>
   <app-footer></app-footer>
  </div>
</template>

<script>
  import AppFooter from './partials/app-footer/AppFooter.vue'
  import AppNav from './partials/app-nav/AppNav.vue'
  import Hero from './../components/hero/Hero.vue'

  export default {
    name: 'layout-view',
    components: {
      'app-footer': AppFooter,
      'app-navigation': AppNav,
      'hero': Hero
    }
  }
</script>

<style lang="sass">
  @import './../assets/sass/main.sass';
</style>

