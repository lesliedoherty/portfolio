<template>
    <section>
        <article v-for="project in projects" v-bind:key="project.id" :class="project.class" class="project_item" v-bind:style="{ 'background-image': 'url(' + project.media.preview + ')' }" >
            <project-item-header
                :name="project.name"
                :client="project.client"
            >
            </project-item-header>

            <div class="container">

                <dl class="project_item--content">
                    <project-item-description-list-item v-if="project.description"
                       label="Description"
                        :id="project.id"
                        :content="project.description"
                    >
                    </project-item-description-list-item>
                    <project-item-description-list-item v-if="project.challenges"
                        label="Challenges"
                        :id="project.id"
                        :content="project.challenges"
                    >
                    </project-item-description-list-item>
                    <project-item-description-list-item v-if="project.solution"
                        label="Solution"
                        :id="project.id"
                        :content="project.solution"
                    >
                    </project-item-description-list-item>
                </dl>

                <aside>
                    <dl>
                        <project-item-description-list-item v-if="project.roll"
                            label="Roll"
                            :id="project.id"
                            :content="project.roll"
                        >
                        </project-item-description-list-item>
                        <div>
                            <dt class="project_item--tech-label" :id="'project_tech_' + project.id">Tech</dt>
                            <dd class="project_item--tech" v-for="item in project.technology" :key="item" :aria-labelledby="'project_tech_' + project.id">{{ item }}</dd>
                        </div>
                    </dl>
                </aside>

                <div v-if="project.testimonial[0]">
                    <project-testimonial
                        :id="project.id"
                        :link="project.testimonial[0].link"
                        :quote="project.testimonial[0].quote"
                        :name="project.testimonial[0].name"
                        ></project-testimonial>
                </div>
            </div>
            <template v-if="project.media.animation">
                <template v-if="project.media.animation.frame === 'iPad'">
                <div class="container animation--iPad">
                <project-tablet
                :image="project.media.animation.image"
                ></project-tablet>
                </div>
                </template>

            </template>
        </article>
    </section>
</template>

<script src='./index.js'></script>
