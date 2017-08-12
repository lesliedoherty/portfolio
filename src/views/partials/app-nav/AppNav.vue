<template>
<div class="hero-wrap wales">
  <nav class="navbar">
    <div class="container">
      <header class="nav_branding content">
        <h1 class="global_title">Leslie Doherty</h1>
        <h2 class="global_subtitle">Front-end Architect</h2>
      </header>

      <div class="nav_links">
        <router-link class="nav_item" v-smooth-scroll="{ duration: 5000}" :to="{ path: '/'}" replace>Home</router-link>
        <router-link class="nav_item" v-smooth-scroll="{ duration: 3500}" :to="{ path: 'styleguide'}" replace>Style</router-link>

      </div>
    </div>
  </nav>
  <hero
    class="wales"
  ></hero>
  </div>
</template>

<script src="./index.js"></script>

