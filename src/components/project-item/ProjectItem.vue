<template>
    <section>
        <article v-for="project in projects" v-bind:key="project.id" :class="project.class" class="project_item" v-bind:style="{ 'background-image': 'url(' + project.media.preview + ')' }" >
            <div class="container">
                <project-item-header
                    :name="project.name"
                    :client="project.client"
                >
                </project-item-header>

                <dl class="project_item--content">
                    <div>
                        <dt :id="'project_description_' + project.id">Description</dt>
                        <dd :aria-labelledby="'project_description_' + project.id">{{ project.description }}</dd>
                    </div>
                    <div>
                        <dt :id="'project_challenges_' + project.id">Challenges</dt>
                        <dd :aria-labelledby="'project_challenges_' + project.id">{{ project.challenges }}</dd>
                    </div>
                    <div>
                        <dt :id="'project_solution_' + project.id">Solution</dt>
                        <dd>{{ project.solution }}</dd>
                    </div>
                </dl>

                <aside>
                    <dl>
                        <div>
                            <dt class="project_item--roll-label" :id="'project_roll_' + project.id">Roll</dt>
                            <dd class="project_item--roll-item" role="definition" :aria-labelledby="'project_roll_' + project.id">{{ project.roll }}</dd>
                        </div>
                        <div>
                            <dt class="project_item--tech-label" :id="'project_tech_' + project.id">Tech</dt>
                            <dd class="project_item--tech" v-for="item in project.technology" :key="item" :aria-labelledby="'project_tech_' + project.id">{{ item }}</dd>
                        </div>
                    </dl>
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
