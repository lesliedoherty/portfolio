<template>
    <section>
        <article v-for="project in projects" v-bind:key="project.id" :class="project.class" class="project_item">
            <div class="container">
                <h1 class="global_title">
                    {{ project.name }}
                </h1>
                <h2 class="global_subtitle">
                    {{ project.roll }}
                </h2>
                <p>Description description {{ project.description }}</p>
                <p>Do I want to label this as challenges? <br />
                    {{ project.challenges }}</p>
                <p>Do I want to label this as solutions? <br />
                    {{ project.solution }}</p>
                <ul v-for="item in project.technology" :key="project.id" class="project_item--tech">
                    <li>{{ item }}</li>

                </ul>

                <blockquote v-for="item in project.testimonial" :key="project.id" :cite="item.link">
                    {{ item.quote }}
                    <cite>{{ item.name }}</cite>
                </blockquote>
            </div>
            <!-- <img :src="project.media.preview" :alt="project.name" /> -->
        </article>
    </section>
</template>

<script src='./index.js'></script>
