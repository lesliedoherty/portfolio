<template>
    <section>
        <article v-for="project in projects" v-bind:key="project.id" :class="project.class" :id="project.id" class="project_item">
             <project-item v-bind:project="project"></project-item>
        </article>
    </section>
</template>

<script src='./index.js'></script>
