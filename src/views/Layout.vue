<template>
  <section>


    <main role="main" aria-labelledby="Label" class="main">
      <router-view></router-view>
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
