<template>
  <section class="parent">
    <header class="container global_title--section-main" id="work">
      <h1 class="global_subtitle">Recent Work</h1>
    </header>

    <project-item v-bind:source="source" :items="items"></project-item>
    <section id="contact" class="contact contact-wrapper">

      <header class="container global_title--section-main">
        <h1 class="global_subtitle">Contact</h1>
      </header>
      <article class="container contact_form-wrapper">
        <contact></contact>
        <img src="./../../../../static/base/apple-contact.png" />
      </article>
    </section>
  </section>
</template>

<script src="./index.js"></script>
