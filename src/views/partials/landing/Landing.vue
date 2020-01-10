<template>
  <div>
    <section id="a11y">
      <header class="container global_title--section-main">
        <h2 class="h1 global_subtitle">Accessibility Experience</h2>
      </header>
    </section>
    <section id="projects">
    <header class="container global_title--section-main">
      <h2 class="h1 global_subtitle">Recent Work</h2>
    </header>
    <project-items v-bind:projects="projects"></project-items>
    </section>

    <section id="contact" class="contact contact-wrapper">
      <header class="container global_title--section-main">
        <h2 class="h1 global_subtitle">Contact</h2>
      </header>
      <article class="container contact_form-wrapper">
        <contact></contact>
        <img src="./../../../../static/base/apple-contact.png" />
      </article>
    </section>
  </div>
</template>

<script src="./index.js"></script>
