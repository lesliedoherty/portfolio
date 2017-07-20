<template>
  <article>
    <ul v-for="project in projects" v-bind:key="project.id">
      <li>{{ project.id }}</li>
      <li>{{ project.name }}</li>
      <li>{{ project.roll }}</li>
      <li>{{ project.description }}</li>
      <li>{{ project.challenges }}</li>
      <li>{{ project.solution }}</li>
      <li>{{ project.testimonial[0].name }}</li>
      <li><img :src="project.media.preview" :alt="project.name" /></li>
    </ul>
  </article>
</template>

<script src='./index.js'></script>
