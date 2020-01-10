<template>
  <div>

    <app-navigation></app-navigation>
    <main role="main" class="content">
      <router-view></router-view>
   </main>
   <app-footer></app-footer>
  </div>
</template>

<script>
  import AppFooter from './partials/app-footer/AppFooter.vue'
  import AppNav from './partials/app-nav/AppNav.vue'

  export default {
    name: 'layout-view',
    components: {
      'app-footer': AppFooter,
      'app-navigation': AppNav
    }
  }
</script>

<style lang="sass">
  @import './../assets/sass/main.sass';
</style>

