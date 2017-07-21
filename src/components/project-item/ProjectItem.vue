<template>
    <section>
        <article v-for="project in projects" v-bind:key="project.id" :class="project.class" class="project_item" v-bind:style="{ 'background-image': 'url(' + project.media.preview + ')' }" >
            <div class="container">
                <h1 class="global_title">
                    {{ project.name }}
                </h1>
                <h2 class="global_subtitle">
                    {{ project.client }}
                </h2>

                <h3 :id="'project_description_' + project.id">Description</h3>
                <p :aria-labelledby="'project_description_' + project.id">{{ project.description }}</p>
                <h3 :id="'project_challenges_' + project.id">Challenges</h3>
                <p :aria-labelledby="'project_challenges_' + project.id">{{ project.challenges }}</p>
                <h3 :id="'project_solution_' + project.id">Solution</h3>
                <p>{{ project.solution }}</p>

                <aside>
                <dl>
                  <dt class="project_item--roll-label" :id="'project_roll_' + project.id">Rolls</dt>
                  <dd class="project_item--roll-item" role="definition" :aria-labelledby="'project_roll_' + project.id">{{ project.roll }}</dd>
                </dl>

                <h3 class="project_item--tech-label" :id="'project_tech_' + project.id">Tech</h3>
                <ul class="project_item--tech" :aria-labelledby="'project_tech_' + project.id">
                    <li v-for="item in project.technology" :key="item">{{ item }}</li>
                </ul>
                </aside>

                <blockquote v-for="item in project.testimonial" :key="project.id" :cite="item.link" class="project_item--testimonial">
                    {{ item.quote }}
                    <cite>{{ item.name }}</cite>
                </blockquote>
            </div>
        </article>
    </section>
</template>

<script src='./index.js'></script>
