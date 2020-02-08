<template>
    <div class="project_item">
        <div class="container">
            <div class="project_item--body">
              <h4 :data-anchor-id='project.id' class="project_anchor project_item--name">
                {{ project.name }}
              </h4>
              <table class="project_item--details">
                <caption class="sr-only">Project Technical Details</caption>
                <tr><th scope="row" class="project_item--details__label">Client</th> <td class="project_item--details__client">{{ project.client }}</td></tr>
                <tr><th scope="row" class="project_item--details__label">Role</th> <td class="project_item--details__role">{{ project.role }}</td></tr>
                <tr><th scope="row" class="project_item--details__label">Tech</th><td class="project_item--details__tech"><span v-for="item in project.technology" :key="item">{{ item }}, </span></td></tr>
              </table>
              <div class="project_item--content">
                    <project-item-description-item v-if="project.description"
                                                        label="Description"
                                                        :content="project.description"
                    >
                    </project-item-description-item>
                    <project-item-description-item v-if="project.challenges"
                                                        label="Challenges"
                                                        :content="project.challenges"
                    >
                    </project-item-description-item>
                    <project-item-description-item v-if="project.solution"
                                                        label="Solution"
                                                        :content="project.solution"
                    >
                    </project-item-description-item>
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
      <template v-if="project.testimonial[0]">
            <project-testimonial
              :id="project.id"
              :link="project.testimonial[0].link"
              :quote="project.testimonial[0].quote"
              :name="project.testimonial[0].name"
              :role="project.testimonial[0].role"
              :image="project.testimonial[0].image"
            ></project-testimonial>
          </template>
    </div>
</template>

<script src='./index.js'></script>
