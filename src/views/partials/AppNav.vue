<template>
<div class="hero-wrap wales">
  <nav class="navbar">
    <div class="container">
      <header class="nav_branding content">
        <h1 class="global_title">Leslie Doherty</h1>
        <h2 class="global_subtitle">Front-end Architect</h2>
      </header>

      <div class="nav_links">
        <a class="nav_item" href="/" target="_blank">
          Work
        </a>
        <a class="nav_item" href="https://twitter.com/mrsflinger" target="_blank">
          Contact
        </a>
      </div>
    </div>
  </nav>
  <hero
    class="wales"
  ></hero>
  </div>
</template>

<script>
  import Hero from './../../components/hero/Hero'

  export default {
    name: 'appNav',
    components: {
      'hero': Hero
    }
  }
</script>

