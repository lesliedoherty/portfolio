<template>
  <section>

      <main role="main" aria-labelledby="Label" class="content">
      <router-view></router-view>
   </main>
  </section>
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

<style>
  @import './../assets/tableau2/css/style.css';
</style>

