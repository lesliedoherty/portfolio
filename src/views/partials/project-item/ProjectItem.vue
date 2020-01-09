<template>
    <div>
        <div class="container">
            <div class="project_item--body">
                <project-item-header
                        :name="project.name"
                        :client="project.client"
                >
                </project-item-header>

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
                        <project-item-description-list-item v-if="project.role"
                                                            label="Role"
                                                            :id="project.id"
                                                            :content="project.role"
                        >
                        </project-item-description-list-item>
                        <div>
                            <dt class="project_item--tech-label" :id="'project_tech_' + project.id">Tech :</dt>
                            <dd class="project_item--tech" v-for="item in project.technology" :key="item" :aria-labelledby="'project_tech_' + project.id">{{ item }}</dd>
                        </div>
                    </dl>
                </aside>

                <template v-if="project.testimonial[0]">
                    <project-testimonial
                            :id="project.id"
                            :link="project.testimonial[0].link"
                            :quote="project.testimonial[0].quote"
                            :name="project.testimonial[0].name"
                            :role="project.testimonial[0].role"
                    ></project-testimonial>
                </template>
            </div>
        </div>
        <!-- TODO add mobile alternates for animations if large files used as backgrounds -->
        <template v-if="project.media.animation">
            <div class="project_item--preview" v-if="project.media.animation.frame === 'iPad'">
                <div class="container project_item--preview-item animation--iPad">
                  <project-tablet
                            :image="project.media.animation.image"
                            :name="project.name"
                    ></project-tablet>
                </div>
            </div>
            <div class="project_item--preview" v-if="project.media.animation.frame === 'macbook'">
                <div class="container project_item--preview-item animation--macbook">
                    <project-macbook
                            :image="project.media.animation.image"
                            :name="project.name"
                    ></project-macbook>
                </div>
            </div>
        </template>
        <template v-else-if="project.media.preview">
            <div class="project_item--preview" v-if="project.media.preview">
                <img class="project_item--preview-item" :src="project.media.preview" :alt="'Image of project with ' + project.name">
            </div>
        </template>

    </div>
</template>

<script src='./index.js'></script>
