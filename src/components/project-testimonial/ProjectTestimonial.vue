<template>
    <div class="container project_item--testimonial-wrapper">
      <img class="testimonial_image" :src='image' :alt="'Photo of ' + name ">
        <blockquote :key="id" :cite="link" class="project_item--testimonial">
            {{ quote }}
            <cite>
              <a class="testimonial_name" :href='link' target="_blank"><span class="sr-only">Opens in linkedIn page in a new tab for </span> <span>{{ name }}</span></a>
                <span class="testimonial_role">{{ role }}</span>
            </cite>
        </blockquote>
    </div>
</template>

<script src='./index.js'></script>
