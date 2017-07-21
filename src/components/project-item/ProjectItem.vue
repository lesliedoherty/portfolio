<template>
  <section>
    <article v-for="project in projects" v-bind:key="project.id" :class="project.class" class="portfolio_item">
      <div class="container">
            <h1 class="title no-margin-bottom">
              {{ project.name }}
            </h1>
            <h2 class="subtitle">
              {{ project.roll }}
            </h2>
        </div>

      {{ project.description }}
      {{ project.challenges }}
      {{ project.solution }}
      {{ project.testimonial[0].name }}
      <img :src="project.media.preview" :alt="project.name" />
    </article>
  </section>
</template>

<script src='./index.js'></script>
