<template>
    <section>
        <article v-for="project in projects" :id='project.id' :class="project.class" class="project_items">
             <project-item v-bind:project="project"></project-item>
        </article>
    </section>
</template>

<script src='./index.js'></script>
